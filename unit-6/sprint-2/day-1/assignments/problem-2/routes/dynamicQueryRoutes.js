const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

// Use Mongoose's ability to dynamically interact with a collection
router.get('/students', async (req, res) => {
  try {
    const { name, age } = req.query;
    
    // Build the query dynamically based on parameters provided
    let query = {};
    
    if (name) {
      query.name = { $regex: name, $options: 'i' }; // case-insensitive search
    }
    
    if (age) {
      const ageInt = parseInt(age, 10);
      if (!isNaN(ageInt) && ageInt > 0) {
        query.age = ageInt;
      } else {
        return res.status(400).json({ message: 'Invalid age parameter' });
      }
    }

    // Execute the query
    const students = await mongoose.connection.db.collection('students').find(query).toArray();

    if (students.length === 0) {
      return res.status(404).json({ message: 'No matching records found' });
    }

    res.json(students);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
});

module.exports = router;
