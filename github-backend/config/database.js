const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('database', 'username', 'password', {
  host: 'localhost',
  dialect: 'mysql', // or 'sqlite', 'postgres', etc.
});

module.exports = sequelize;
