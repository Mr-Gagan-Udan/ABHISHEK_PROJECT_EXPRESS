const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
  title: { type: String, required: true },
  director: String,
  genre: String,
  year: Number,
  rating: { type: Number, default: 0 },
  votes: { type: Number, default: 0 },
});

const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;
