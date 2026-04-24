const { DataTypes } = require('sequelize');
const sequelize = require('../config/db.config');

const db = {};

db.sequelize = sequelize;

// ONLY THIS
db.form = require('./form')(sequelize, DataTypes);

db.sequelize.sync({ alter: true })
  .then(() => {
    console.log("DB synced");
  })
  .catch((err) => {
    console.error("Sync error:", err);
  });

module.exports = db;