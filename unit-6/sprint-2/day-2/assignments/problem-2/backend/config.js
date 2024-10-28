const { Sequelize } = require('sequelize');

// Replace with your own database credentials
const sequelize = new Sequelize('movie_db', 'username', 'password', {
    host: 'localhost',
    dialect: 'mysql',
});

module.exports = sequelize;
