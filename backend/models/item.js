const Sequelize = require('sequelize')
const config = require('../config')

const Item = config.define('Item', {
  id : {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  item_type: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  item_subtype: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  photo_file: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  description: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  price: {
    type: Sequelize.FLOAT,
    allowNull: true,
  }

},{timestamps: false});

module.exports = Item;
