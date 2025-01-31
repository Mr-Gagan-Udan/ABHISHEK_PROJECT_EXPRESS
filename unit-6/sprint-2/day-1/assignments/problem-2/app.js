require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');
const dynamicQueryRoutes = require('./routes/dynamicQueryRoutes');

const app = express();

// Connect to Database
connectDB();

// Middleware
app.use(express.json());

// Use the dynamic query routes
app.use('/api', dynamicQueryRoutes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
