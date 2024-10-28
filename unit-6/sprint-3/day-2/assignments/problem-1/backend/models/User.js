const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  roles: { type: [String], default: ['USER'], enum: ['USER', 'ADMIN'] },
});

module.exports = mongoose.model('User', UserSchema);
