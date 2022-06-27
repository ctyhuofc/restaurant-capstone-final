const environment = process.env.NODE_ENV || "development";

if(environment === 'production'){
host = 'bv2rebwf6zzsv341.cbetxkdyhwsb.us-east-1.rds.amazonaws.com'
  database = 'fb26ij8qa69y834u'
  username = 'y6cmxttbu7ttnjx4'
  password= 'u2lrvgckdjnjfnxy'
}else{
  host = 'localhost';
  database = 'restaurant_db'
  username = 'root'
  password = 'password'
}

const Sequelize = require('sequelize');
const config = new Sequelize(database,username,password, {dialect: 'mysql', host:host	});

module.exports = config;
