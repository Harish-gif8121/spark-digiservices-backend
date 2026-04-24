const { Sequelize } = require('sequelize');


// Option 3: Passing parameters separately (other dialects)
const sequelize = new Sequelize('sparkdigi', 'root', 'Harish@311', {
  host: 'localhost',
  dialect: 'mysql',
});

module.exports = sequelize;