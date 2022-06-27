const Sequelize = require('sequelize')
const config = require('../config')

const Contact_Form = config.define('Contact_Form', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  full_name: {
    // type: Sequelize.ENUM("food", "drink", "offer"),
    type: Sequelize.STRING,
    allowNull: false,
  },
  email: {
    // type: Sequelize.ENUM("food", "drink", "offer"),
    type: Sequelize.STRING,
    allowNull: false,
  },
  comment: {
    // type: Sequelize.ENUM("food", "drink", "offer"),
    type: Sequelize.STRING,
    allowNull: false,
  }
},{timestamps: false});

module.exports = Contact_Form


