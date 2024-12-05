const eventService = require("../services/eventService");

const getEvents = async (req, res, next) => {
  try {
    const events = await eventService.getEvents(req.query);
    res.json(events);
  } catch (error) {
    next(error);
  }
};

const createEvent = async (req, res, next) => {
  try {
    const event = await eventService.createEvent(req.body);
    res.status(201).json(event);
  } catch (error) {
    next(error);
  }
};

const updateEvent = async (req, res, next) => {
  try {
    const { id } = req.params;
    const event = await eventService.updateEvent(id, req.body);
    res.json(event);
  } catch (error) {
    next(error);
  }
};

const deleteEvent = async (req, res, next) => {
  try {
    const { id } = req.params;
    await eventService.deleteEvent(id);
    res.status(204).send();
  } catch (error) {
    next(error);
  }
};

module.exports = { getEvents, createEvent, updateEvent, deleteEvent };
