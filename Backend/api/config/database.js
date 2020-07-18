
const {Sequelize, DataTypes} = require('sequelize');
const sequelize = new Sequelize('e-commerce', 'postgres', '1Q3e5t7u9o', {
  host: 'localhost',
  dialect: 'postgres',
});



export default sequelize;

