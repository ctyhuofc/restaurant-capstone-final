const Sequelize = require('sequelize')
const config = require('../config')

const about_us = config.define('about_us', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  our_history: {
    type: Sequelize.STRING,
    allowNull: false
  },
  what_we_believe: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  our_commit: {
    type: Sequelize.STRING,
    allowNull: false
  },
  photo_file: {
    type: Sequelize.STRING,
    allowNull: false
  }
}, {timestamps: false});

module.exports = about_us
