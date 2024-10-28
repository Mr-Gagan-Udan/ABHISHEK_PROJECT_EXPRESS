const express = require('express');
const app = express();

app.use(express.json());

const validateTodoData = (req, res, next) => {
    const { ID, Name, Rating, Description, Genre, Cast } = req.body;
    let validationErrors = [];

    // Validate ID: should be a number
    if (typeof ID !== 'number') {
        validationErrors.push('ID must be a number');
    }

    // Validate Name: should be a string
    if (typeof Name !== 'string') {
        validationErrors.push('Name must be a string');
    }

    // Validate Rating: should be a number
    if (typeof Rating !== 'number') {
        validationErrors.push('Rating must be a number');
    }

    // Validate Description: should be a string
    if (typeof Description !== 'string') {
        validationErrors.push('Description must be a string');
    }

    // Validate Genre: should be a string
    if (typeof Genre !== 'string') {
        validationErrors.push('Genre must be a string');
    }

    // Validate Cast: should be an array of strings
    if (!Array.isArray(Cast) || !Cast.every(item => typeof item === 'string')) {
        validationErrors.push('Cast must be an array of strings');
    }

    // If there are validation errors, respond with status 400 and the errors
    if (validationErrors.length > 0) {
        return res.status(400).json({
            message: 'Invalid request body',
            errors: validationErrors
        });
    }

    // If validation passes, proceed to the route handler
    next();
};

// POST route to handle TODO data
app.post('/todo', validateTodoData, (req, res) => {
    res.status(200).json({ message: 'Data received successfully' });
});

const PORT = 8000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
