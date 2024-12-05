"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class events extends Model {
    static associate(models) {}
  }
  events.init(
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false,
      },
      language: DataTypes.STRING,
      title: DataTypes.STRING,
      subTitle: DataTypes.TEXT,
      startDate: DataTypes.DATE,
      endDate: DataTypes.DATE,
      imageUrl: DataTypes.STRING,
      tags: DataTypes.JSON,
      url: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "events",
    }
  );
  return events;
};
