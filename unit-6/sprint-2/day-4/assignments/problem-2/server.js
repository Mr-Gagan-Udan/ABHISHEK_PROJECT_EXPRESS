const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const passport = require('passport');
const User = require('./models/User');
const Product = require('./models/Product');
const dotenv = require('dotenv');
const passportConfig = require('./config/passport');

dotenv.config();
const app = express();
app.use(express.json());
app.use(passport.initialize());
passportConfig(passport);

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });

// User Registration
app.post('/register', async (req, res) => {
    const { username, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ username, password: hashedPassword });

    try {
        await newUser.save();
        res.status(201).send('User created successfully');
    } catch (err) {
        res.status(400).send(err.message);
    }
});

// User Login
app.post('/login', async (req, res) => {
    const { username, password } = req.body;

    const user = await User.findOne({ username });
    if (!user || !(await bcrypt.compare(password, user.password))) {
        return res.status(401).send('Invalid credentials');
    }

    const accessToken = jwt.sign({ id: user._id }, process.env.JWT_ACCESS_SECRET, { expiresIn: '1h' });
    const refreshToken = jwt.sign({ id: user._id }, process.env.JWT_REFRESH_SECRET, { expiresIn: '7d' });
    user.refreshToken = refreshToken;
    await user.save();

    res.json({ accessToken, refreshToken });
});

// Protected CRUD Routes
app.get('/products', passport.authenticate('jwt', { session: false }), async (req, res) => {
    const products = await Product.find();
    res.json(products);
});

app.post('/products', passport.authenticate('jwt', { session: false }), async (req, res) => {
    const product = new Product(req.body);
    await product.save();
    res.status(201).json(product);
});

app.put('/products/:id', passport.authenticate('jwt', { session: false }), async (req, res) => {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(product);
});

app.delete('/products/:id', passport.authenticate('jwt', { session: false }), async (req, res) => {
    await Product.findByIdAndDelete(req.params.id);
    res.sendStatus(204);
});

// Refresh Token
app.post('/token', async (req, res) => {
    const { refreshToken } = req.body;
    if (!refreshToken) return res.sendStatus(401);

    jwt.verify(refreshToken, process.env.JWT_REFRESH_SECRET, async (err, user) => {
        if (err) return res.sendStatus(403);

        const foundUser = await User.findById(user.id);
        if (!foundUser || foundUser.refreshToken !== refreshToken) return res.sendStatus(403);

        const accessToken = jwt.sign({ id: foundUser._id }, process.env.JWT_ACCESS_SECRET, { expiresIn: '1h' });
        res.json({ accessToken });
    });
});

// Logout
app.post('/logout', async (req, res) => {
    const { refreshToken } = req.body;
    await User.updateOne({ refreshToken }, { $set: { refreshToken: null } });
    res.sendStatus(200);
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
