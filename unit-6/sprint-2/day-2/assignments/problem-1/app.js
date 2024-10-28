const express = require('express');
const bodyParser = require('body-parser');
const Product = require('./Product');
const sequelize = require('./config');
const { Op } = require('sequelize');

const app = express();
app.use(bodyParser.json());

// Sync models
sequelize.sync();

// Create Product
app.post('/products', async (req, res) => {
    try {
        const product = await Product.create(req.body);
        res.status(201).json(product);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Read all Products with search, filter, and pagination
app.get('/products', async (req, res) => {
    const { name, minPrice, maxPrice, page = 1, limit = 10 } = req.query;
    const where = {};
    const offset = (page - 1) * limit;

    if (name) {
        where.name = {
            [Op.like]: `%${name}%`,
        };
    }
    if (minPrice) {
        where.price = {
            [Op.gte]: minPrice,
        };
    }
    if (maxPrice) {
        where.price = {
            ...where.price,
            [Op.lte]: maxPrice,
        };
    }

    try {
        const products = await Product.findAndCountAll({
            where,
            limit,
            offset,
        });
        res.json({
            total: products.count,
            page,
            data: products.rows,
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Update Product
app.put('/products/:id', async (req, res) => {
    try {
        const product = await Product.findByPk(req.params.id);
        if (!product) return res.status(404).json({ error: 'Product not found' });
        await product.update(req.body);
        res.json(product);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Delete Product
app.delete('/products/:id', async (req, res) => {
    try {
        const product = await Product.findByPk(req.params.id);
        if (!product) return res.status(404).json({ error: 'Product not found' });
        await product.destroy();
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
