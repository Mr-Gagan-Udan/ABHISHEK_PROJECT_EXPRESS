const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  roles: { type: [String], enum: ['ADMIN', 'MANAGER', 'MEMBER'], required: true },
});

module.exports = mongoose.model('User', UserSchema);
