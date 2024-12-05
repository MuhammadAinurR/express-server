const bindService = require("../services/bindService");

const getBindData = async (req, res, next) => {
  try {
    const bindData = await bindService.bindData();
    res.json(bindData);
  } catch (error) {
    next(error);
  }
};

module.exports = { getBindData };
