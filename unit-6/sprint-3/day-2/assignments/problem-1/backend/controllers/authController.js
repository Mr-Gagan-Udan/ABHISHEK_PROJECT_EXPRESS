const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

exports.register = async (req, res) => {
  const { username, password, roles } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);

  const user = new User({ username, password: hashedPassword, roles });
  await user.save();

  const token = jwt.sign({ id: user._id, role: user.roles }, process.env.JWT_SECRET, { expiresIn: '1h' });
  res.json({ token });
};

exports.login = async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username });
  
  if (!user || !await bcrypt.compare(password, user.password)) {
    return res.status(400).json({ message: 'Invalid credentials' });
  }

  const token = jwt.sign({ id: user._id, role: user.roles }, process.env.JWT_SECRET, { expiresIn: '1h' });
  res.json({ token });
};