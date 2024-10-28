const express = require('express');
const router = express.Router();
const blogController = require('../controllers/blogController');

// Blog Post CRUD routes
router.post('/blogs', blogController.createBlogPost);
router.get('/blogs', blogController.getBlogPosts);
router.put('/blogs/:id', blogController.updateBlogPost);
router.delete('/blogs/:id', blogController.deleteBlogPost);

module.exports = router;
