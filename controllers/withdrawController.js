const withdrawService = require("../services/withdrawService");

exports.getWithdrawData = async (req, res, next) => {
  const { status } = req.query;
  const page = parseInt(req.query.page) || 1;
  const limit = 10; // Items per page

  try {
    const result = await withdrawService.getWithdrawData(status, page, limit);
    res.json(result);
  } catch (error) {
    console.error(error);
    next(error);
  }
};
