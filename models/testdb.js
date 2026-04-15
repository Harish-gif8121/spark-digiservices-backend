// models/testdb.js
const {DataTypes} = require('sequelize');
const sequelize = require('../config/db.config');
  const test = sequelize.define(
    "test",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      phone_number: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    },
    {
      freezeTableName: true,
      timestamps: true,
    }
  );
  (async () => {
  try {
    await sequelize.authenticate();
    console.log("All models were synchronized successfully.");
  } catch (error) {
    console.error("Error synchronizing models:", error);
  }
})();
  module.exports = test;