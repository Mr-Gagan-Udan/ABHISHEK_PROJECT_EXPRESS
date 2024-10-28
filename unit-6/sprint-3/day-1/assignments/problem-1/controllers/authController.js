const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('../models/User');

exports.signup = (req, res) => {
  const { username, password, roles } = req.body;
  bcrypt.hash(password, 10).then(hashedPassword => {
    const newUser = new User({ username, password: hashedPassword, roles });
    newUser.save()
      .then(user => {
        const token = jwt.sign({ id: user._id, roles: user.roles }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.json({ token });
      })
      .catch(err => res.status(500).json({ error: err.message }));
  });
};

exports.login = (req, res) => {
  const { username, password } = req.body;
  User.findOne({ username })
    .then(user => {
      if (!user) return res.status(400).json({ msg: 'User not found' });
      bcrypt.compare(password, user.password).then(isMatch => {
        if (!isMatch) return res.status(400).json({ msg: 'Invalid credentials' });
        const token = jwt.sign({ id: user._id, roles: user.roles }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.json({ token });
      });
    });
};
