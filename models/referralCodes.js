"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class ReferralCode extends Model {
    static associate(models) {}
  }
  ReferralCode.init(
    {
      userId: {
        type: DataTypes.STRING,
        unique: true,
      },
      referralCode: {
        type: DataTypes.STRING,
        unique: true,
      },
      referredBy: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    },
    {
      sequelize,
      modelName: "ReferralCode",
      tableName: "referralCodes",
    }
  );
  return ReferralCode;
};
