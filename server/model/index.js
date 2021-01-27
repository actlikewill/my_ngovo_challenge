const Sequelize = require('sequelize');
const UserModel = require('./users');


const Connection = new Sequelize('anxiousdb', 'wil', 'wil', {
  host: 'localhost',
  dialect: 'postgres',
});

const User = UserModel( Connection , Sequelize );

module.exports = { User, Connection};