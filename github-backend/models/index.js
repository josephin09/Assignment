const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('database', 'username', 'password', {
  host: 'localhost',
  dialect: 'mysql', // or 'sqlite', 'postgres', etc.
});

const User = sequelize.define('User', {
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  details: {
    type: DataTypes.JSON,
    allowNull: false,
  },
  deletedAt: {
    type: DataTypes.DATE,
  },
}, {
  paranoid: true,
});

module.exports = { User, sequelize };
