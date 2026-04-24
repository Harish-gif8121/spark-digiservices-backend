module.exports = (sequelize, DataTypes) => {
  const form = sequelize.define("form", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    phone_number: DataTypes.STRING,
    company: DataTypes.STRING,
    services: DataTypes.STRING,
    message: DataTypes.STRING,
    source: DataTypes.STRING,
  }, {
    freezeTableName: true,
    timestamps: true,
  });

  return form;
};