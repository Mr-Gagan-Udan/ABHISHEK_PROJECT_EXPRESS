const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const Movie = require('./Movie');
const sequelize = require('./config');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Sync models
sequelize.sync();

// Create Movie
app.post('/movies', async (req, res) => {
    try {
        const movie = await Movie.create(req.body);
        res.status(201).json(movie);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Read all Movies
app.get('/movies', async (req, res) => {
    try {
        const movies = await Movie.findAll();
        res.json(movies);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Update Movie
app.put('/movies/:id', async (req, res) => {
    try {
        const movie = await Movie.findByPk(req.params.id);
        if (!movie) return res.status(404).json({ error: 'Movie not found' });
        await movie.update(req.body);
        res.json(movie);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Delete Movie
app.delete('/movies/:id', async (req, res) => {
    try {
        const movie = await Movie.findByPk(req.params.id);
        if (!movie) return res.status(404).json({ error: 'Movie not found' });
        await movie.destroy();
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
