const express = require('express');
const fs = require('fs');
const path = require('path');
const morgan = require('morgan');

const app = express();

// Middleware to parse JSON
app.use(express.json());

// Create a write stream (in append mode) for logging
const logStream = fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' });

// Routes

// GET request for /users
app.get('/users', (req, res) => {
    res.status(200).json({ message: 'List of users' });
});

// GET request for /user/:id (returns a specific user)
app.get('/user/:id', (req, res) => {
    const userId = req.params.id;
    res.status(200).json({ message: `User with ID ${userId}` });
});

// POST request for /register (register a new user)
app.post('/register', (req, res) => {
    res.status(201).json({ message: 'User registered successfully' });
});

// PUT request for /update (update a user)
app.put('/update', (req, res) => {
    res.status(201).json({ message: 'User updated successfully' });
});

// DELETE request for /user/:id (delete a user)
app.delete('/user/:id', (req, res) => {
    const userId = req.params.id;
    res.status(200).json({ message: `User with ID ${userId} deleted successfully` });
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
