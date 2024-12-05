const { events } = require("../models");
const { Op } = require("sequelize");

const getEvents = async (query) => {
  const { page = 1, limit = 10, search = "" } = query;
  const offset = (page - 1) * limit;
  return await events.findAndCountAll({
    where: {
      title: {
        [Op.iLike]: `%${search}%`,
      },
    },
    order: [["updatedAt", "DESC"]],
    limit,
    offset,
  });
};

const createEvent = async (eventData) => {
  return await events.create(eventData);
};

const updateEvent = async (id, eventData) => {
  const [updated] = await events.update(eventData, { where: { id } });
  if (updated) {
    const updatedEvent = await events.findOne({ where: { id } });
    return updatedEvent;
  }
  throw { name: "NotFound" };
};

const deleteEvent = async (id) => {
  const deleted = await events.destroy({ where: { id } });
  if (deleted) return true;
  throw { name: "NotFound" };
};

module.exports = { getEvents, createEvent, updateEvent, deleteEvent };
