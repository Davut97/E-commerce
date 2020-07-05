const {Sequelize, DataTypes} = require('sequelize');
const sequelize = new Sequelize('e-commerce', 'postgres', 'changeme', {
  host: 'localhost',
  dialect: 'postgres',
});

export default sequelize;
