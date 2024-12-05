"use strict";
const { v4: uuidv4 } = require("uuid");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const data = require("./data/events.json");
    await queryInterface.bulkInsert(
      "events",
      data.map((event) => ({
        id: uuidv4(),
        ...event,
        tags: JSON.stringify(event.tags),
        createdAt: new Date(),
        updatedAt: new Date(),
      }))
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("events", null, {});
  },
};
