"use strict";
const { hashPassword, comparePassword } = require("../utils/passwordUtils");

module.exports = (sequelize, DataTypes) => {
  const internalUser = sequelize.define(
    "internalUser",
    {
      username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      role: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      hooks: {
        beforeCreate: async (user) => {
          user.password = await hashPassword(user.password);
        },
      },
    }
  );

  internalUser.prototype.validPassword = async function (password) {
    return await comparePassword(password, this.password);
  };

  return internalUser;
};
