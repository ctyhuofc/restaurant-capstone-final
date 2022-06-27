const Sequelize = require('sequelize')
const config = require('../config')

const Review = config.define('Review', {
  id : {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  name: {
    // type: Sequelize.ENUM("food", "drink", "offer"),
    type: Sequelize.STRING,
    allowNull: false,
  },
  email: {
    // type: Sequelize.ENUM("burger", "pasta", "pizza", "soft drink", "beer", "wine", "bundle"),
    type: Sequelize.STRING,
    allowNull: false,
  },
  item: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  review: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  rating: {
    type: Sequelize.INTEGER,
    allowNull: true,
},

},{timestamps: false});

module.exports = Review;
