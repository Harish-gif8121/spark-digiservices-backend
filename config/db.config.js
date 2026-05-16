const { Sequelize } = require('sequelize');


// Option 3: Passing parameters separately (other dialects)
const sequelize = new Sequelize('testdb', 'root', 'akshitha', {
  host: 'localhost',
  dialect: 'mysql',
  logging:false
});

module.exports = sequelize;