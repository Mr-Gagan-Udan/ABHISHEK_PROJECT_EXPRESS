const Book = require('../models/Book');

exports.createBook = (req, res) => {
  const { title, author } = req.body;
  const newBook = new Book({ title, author, creator: req.user.id });
  newBook.save().then(book => res.json(book));
};

exports.getBooks = (req, res) => {
  const { type } = req.query;

  const query = {};
  const tenMinutesAgo = new Date(Date.now() - 10 * 60 * 1000);

  if (type === 'old') {
    query.createdAt = { $lte: tenMinutesAgo };
  } else if (type === 'new') {
    query.createdAt = { $gt: tenMinutesAgo };
  }

  Book.find(query).then(books => res.json(books));
};

exports.deleteBook = (req, res) => {
  Book.findOneAndDelete({ _id: req.params.id, creator: req.user.id })
    .then(book => book ? res.json({ msg: 'Book deleted' }) : res.status(404).json({ msg: 'Book not found' }));
};
