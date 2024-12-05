"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class binds extends Model {
    static associate(models) {
      binds.belongsTo(models.platforms, {
        foreignKey: "platformId",
      });
    }
  }
  binds.init(
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      userId: DataTypes.STRING,
      uid: DataTypes.STRING,
      platformId: DataTypes.INTEGER,
      isBind: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "binds",
    }
  );
  return binds;
};
