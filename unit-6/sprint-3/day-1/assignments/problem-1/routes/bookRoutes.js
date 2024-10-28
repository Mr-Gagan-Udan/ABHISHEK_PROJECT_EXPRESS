const express = require('express');
const { createBook, getBooks, deleteBook } = require('../controllers/bookController');
const authMiddleware = require('../middlewares/authMiddleware');
const router = express.Router();

router.post('/books', authMiddleware(['CREATOR']), createBook);
router.get('/books', authMiddleware(['VIEWER', 'VIEW_ALL']), getBooks);
router.delete('/books/:id', authMiddleware(['CREATOR']), deleteBook);

module.exports = router;
