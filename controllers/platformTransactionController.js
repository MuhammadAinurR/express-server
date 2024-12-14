const platformTransactionService = require("../services/platformTransactionService");

exports.getPlatformTransaction = async (req, res, next) => {
  try {
    const page = parseInt(req.query.page, 10) || 1;
    const limit = parseInt(req.query.limit, 10) || 10;
    const platformTransaction = await platformTransactionService.getPlatformTransactions(page, limit);
    res.status(201).json(platformTransaction);
  } catch (error) {
    next(error);
  }
};
