"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "referralCodes",
      [
        {
          userId: "firstUser",
          referralCode: "FRIEND50",
          referredBy: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: "user123",
          referralCode: "FRIEND50",
          referredBy: "firstUser",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: "user456",
          referralCode: "WELCOME25",
          referredBy: "user123",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: "user789",
          referralCode: "BONUS75",
          referredBy: "user123",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: "soloUser",
          referralCode: "HAPPY100",
          referredBy: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: "user101",
          referralCode: "SPRING30",
          referredBy: "user456",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: "user102",
          referralCode: "SUMMER40",
          referredBy: "user456",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: "user103",
          referralCode: "FALL20",
          referredBy: "user456",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("referralCodes", null, {});
  },
};
