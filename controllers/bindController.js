const bindService = require("../services/bindService");

const getBindData = async (req, res, next) => {
  try {
    const { status } = req.query;
    const page = parseInt(req.query.page, 10) || 1;
    const limit = parseInt(req.query.limit, 10) || 10;

    const bindData = await bindService.bindData(status, page, limit);
    res.json(bindData);
  } catch (error) {
    next(error);
  }
};

const updateBindStatus = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { status } = req.body;
    await bindService.updateBindStatus(id, status);
    res.json({ message: "Bind status updated" });
  } catch (error) {
    next(error);
  }
};

module.exports = { getBindData, updateBindStatus };
