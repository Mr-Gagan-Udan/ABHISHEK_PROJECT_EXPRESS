const { Model, DataTypes } = require('sequelize');
const sequelize = require('./config');

class Movie extends Model {}

Movie.init({
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    director: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    releaseYear: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
}, {
    sequelize,
    modelName: 'Movie',
});

module.exports = Movie;
