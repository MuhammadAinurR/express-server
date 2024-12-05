"use strict";
const { hashPassword } = require("../utils/passwordUtils");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "internalUsers",
      [
        {
          username: "admin",
          password: await hashPassword("admin1234"),
          role: "admin",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: "user1",
          password: await hashPassword("user1234"),
          role: "user",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("internalUsers", null, {});
  },
};
