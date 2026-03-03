const { Sequelize } = require('sequelize');


// Option 3: Passing parameters separately (other dialects)
const sequelize = new Sequelize('school', 'root', 'Harish@311', {
  host: 'localhost',
  dialect: 'mysql',
});

module.exports = sequelize;