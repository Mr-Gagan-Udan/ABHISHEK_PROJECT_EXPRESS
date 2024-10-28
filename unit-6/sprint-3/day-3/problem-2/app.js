const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const cors = require('cors');
const blogRoutes = require('./routes/blogRoutes');

const app = express();
mongoose.connect('mongodb://localhost:27017/blogDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.use(morgan('dev'));
app.use(cors());
app.use(express.json());

app.use('/api', blogRoutes);

module.exports = app;
