const Movie = require('../models/movieModel');

// Create a movie
exports.createMovie = async (req, res) => {
  try {
    const movie = new Movie(req.body);
    await movie.save();
    res.status(201).json(movie);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Get all movies with filtering, pagination, and sorting
exports.getMovies = async (req, res) => {
  try {
    const { genre, sortBy, page = 1, limit = 10 } = req.query;
    const query = genre ? { genre } : {};
    const movies = await Movie.find(query)
      .sort(sortBy ? { [sortBy]: 1 } : {})
      .skip((page - 1) * limit)
      .limit(parseInt(limit));
    res.json(movies);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Update a movie
exports.updateMovie = async (req, res) => {
  try {
    const movie = await Movie.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(movie);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Delete a movie
exports.deleteMovie = async (req, res) => {
  try {
    await Movie.findByIdAndDelete(req.params.id);
    res.json({ message: 'Movie deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Search by movie name
exports.searchMovie = async (req, res) => {
  try {
    const { name } = req.query;
    const movies = await Movie.find({ title: new RegExp(name, 'i') });
    res.json(movies);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Upvote/Downvote a movie
exports.voteMovie = async (req, res) => {
  try {
    const { vote } = req.body;
    const movie = await Movie.findById(req.params.id);
    if (!movie) return res.status(404).json({ message: 'Movie not found' });

    if (vote === 'up') movie.votes += 1;
    if (vote === 'down') movie.votes -= 1;

    await movie.save();
    res.json(movie);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
