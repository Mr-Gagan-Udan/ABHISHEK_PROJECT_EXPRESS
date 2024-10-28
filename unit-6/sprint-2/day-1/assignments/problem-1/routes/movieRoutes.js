const express = require('express');
const {
  createMovie,
  getMovies,
  updateMovie,
  deleteMovie,
  searchMovie,
  voteMovie,
} = require('../controllers/movieController');

const router = express.Router();

router.post('/', createMovie);
router.get('/', getMovies);
router.put('/:id', updateMovie);
router.delete('/:id', deleteMovie);
router.get('/search', searchMovie);
router.patch('/:id/vote', voteMovie);

module.exports = router;
