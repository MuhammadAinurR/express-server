"use strict";
const { v4: uuidv4 } = require("uuid");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const platforms = await queryInterface.sequelize.query(`SELECT id from platforms;`);
    const platformRows = platforms[0];

    await queryInterface.bulkInsert(
      "binds",
      [
        {
          id: uuidv4(),
          userId: "user_2p4qglc2DyDFCW0Vs5sx24AGsPo_1",
          platformId: platformRows[0].id,
          uid: "123456782A",
          isBind: "approved",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: uuidv4(),
          userId: "user_2p4qglc2DyDFCW0Vs5sx24AGsPo_2",
          platformId: platformRows[1].id,
          uid: "123456BDSF",
          isBind: "pending",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: uuidv4(),
          userId: "user_2p4qglc2DyDFCW0Vs5sx24AGsPo_3",
          platformId: platformRows[2].id,
          uid: "123456ZSADR",
          isBind: "reject",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: uuidv4(),
          userId: "user_2p4qglc2DyDFCW0Vs5sx24AGsPo_4",
          platformId: platformRows[2].id,
          uid: "123456ZSADR",
          isBind: "reject",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: uuidv4(),
          userId: "user_2p4qglc2DyDFCW0Vs5sx24AGsPo_5",
          platformId: platformRows[2].id,
          uid: "123456ZSADR",
          isBind: "reject",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: uuidv4(),
          userId: "user_2p4qglc2DyDFCW0Vs5sx24AGsPo_6",
          platformId: platformRows[2].id,
          uid: "123456ZSADR",
          isBind: "reject",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: uuidv4(),
          userId: "user_2p4qglc2DyDFCW0Vs5sx24AGsPo_7",
          platformId: platformRows[2].id,
          uid: "123456ZSADR",
          isBind: "reject",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: uuidv4(),
          userId: "user_2p4qglc2DyDFCW0Vs5sx24AGsPo_8",
          platformId: platformRows[2].id,
          uid: "123456ZSADR",
          isBind: "reject",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: uuidv4(),
          userId: "user_2p4qglc2DyDFCW0Vs5sx24AGsPo_9",
          platformId: platformRows[2].id,
          uid: "123456ZSADR",
          isBind: "reject",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: uuidv4(),
          userId: "user_2p4qglc2DyDFCW0Vs5sx24AGsPo_10",
          platformId: platformRows[2].id,
          uid: "123456ZSADR",
          isBind: "reject",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: uuidv4(),
          userId: "user_2p4qglc2DyDFCW0Vs5sx24AGsPo_11",
          platformId: platformRows[2].id,
          uid: "123456ZSADR",
          isBind: "reject",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: uuidv4(),
          userId: "user_2p4qglc2DyDFCW0Vs5sx24AGsPo_12",
          platformId: platformRows[2].id,
          uid: "123456ZSADR",
          isBind: "reject",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: uuidv4(),
          userId: "user_2p4qglc2DyDFCW0Vs5sx24AGsPo_13",
          platformId: platformRows[2].id,
          uid: "123456ZSADR",
          isBind: "reject",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: uuidv4(),
          userId: "user_2p4qglc2DyDFCW0Vs5sx24AGsPo_14",
          platformId: platformRows[2].id,
          uid: "123456ZSADR",
          isBind: "reject",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: uuidv4(),
          userId: "user_2p4qglc2DyDFCW0Vs5sx24AGsPo_15",
          platformId: platformRows[2].id,
          uid: "123456ZSADR",
          isBind: "reject",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: uuidv4(),
          userId: "user_2p4qglc2DyDFCW0Vs5sx24AGsPo_16",
          platformId: platformRows[2].id,
          uid: "123456ZSADR",
          isBind: "reject",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: uuidv4(),
          userId: "user_2p4qglc2DyDFCW0Vs5sx24AGsPo_17",
          platformId: platformRows[2].id,
          uid: "123456ZSADR",
          isBind: "reject",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("binds", null, {});
  },
};
