const Sequelize = require('sequelize')
const config = require('../config')

const Employee = config.define('Employee', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  email:{
    type: Sequelize.STRING,
    allowNull: false
  },
  password:{
    type: Sequelize.STRING,
    allowNull: false
  },
}, {timestamps: false});

module.exports = Employee
