const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const connectDB = require('./config');
const Product = require('./Product');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
connectDB();

// Create Product
app.post('/products', async (req, res) => {
    try {
        const product = await Product.create(req.body);
        res.status(201).json(product);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Get all Products with Pagination and Filtering
app.get('/products', async (req, res) => {
    const { page = 1, limit = 10, sort = 'asc', search = '' } = req.query;

    try {
        const query = search ? { name: { $regex: search, $options: 'i' } } : {};
        const products = await Product.find(query)
            .sort({ price: sort === 'asc' ? 1 : -1 })
            .limit(limit * 1)
            .skip((page - 1) * limit);
        const count = await Product.countDocuments(query);

        res.json({
            totalPages: Math.ceil(count / limit),
            currentPage: page,
            products,
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Update Product
app.put('/products/:id', async (req, res) => {
    try {
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!product) return res.status(404).json({ error: 'Product not found' });
        res.json(product);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Delete Product
app.delete('/products/:id', async (req, res) => {
    try {
        const product = await Product.findByIdAndDelete(req.params.id);
        if (!product) return res.status(404).json({ error: 'Product not found' });
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Global error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
