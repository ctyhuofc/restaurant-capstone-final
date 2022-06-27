const Sequelize = require('sequelize')
const config = require('../config')

const Contact_info = config.define('Contact_info', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  address: {
    type: Sequelize.STRING,
    allowNull: false
  },
  phone_number: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false
  },
  hours:{
    type: Sequelize.STRING,
    allowNull: false
  }
}, {timestamps: false});

module.exports = Contact_info
