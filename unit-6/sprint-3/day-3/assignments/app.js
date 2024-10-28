const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const cors = require('cors');
const taskRoutes = require('./routes/taskRoutes');
const rateLimiter = require('./middlewares/rateLimiter');

const app = express();
mongoose.connect('mongodb://localhost:27017/taskDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use(rateLimiter);

app.use('/api', taskRoutes);

module.exports = app;
