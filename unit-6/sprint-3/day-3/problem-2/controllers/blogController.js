const BlogPost = require('../models/BlogPost');

// Create a new blog post
exports.createBlogPost = async (req, res) => {
  try {
    const blogPost = new BlogPost(req.body);
    await blogPost.save();
    res.status(201).json(blogPost);
  } catch (error) {
    res.status(500).json({ error: 'Error creating blog post' });
  }
};

// Get blog posts with sorting, pagination, and filtering
exports.getBlogPosts = async (req, res) => {
  try {
    const { page = 1, limit = 10, sortBy = 'createdAt', sortOrder = 'desc', author, tags } = req.query;

    const filter = {};
    if (author) filter.author = author;
    if (tags) filter.tags = { $in: tags.split(',') };

    const blogPosts = await BlogPost.find(filter)
      .sort({ [sortBy]: sortOrder === 'desc' ? -1 : 1 })
      .skip((page - 1) * limit)
      .limit(parseInt(limit));

    res.json(blogPosts);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching blog posts' });
  }
};

// Update a blog post
exports.updateBlogPost = async (req, res) => {
  try {
    const blogPost = await BlogPost.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!blogPost) return res.status(404).json({ error: 'Blog post not found' });
    res.json(blogPost);
  } catch (error) {
    res.status(500).json({ error: 'Error updating blog post' });
  }
};

// Delete a blog post
exports.deleteBlogPost = async (req, res) => {
  try {
    await BlogPost.findByIdAndDelete(req.params.id);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: 'Error deleting blog post' });
  }
};
