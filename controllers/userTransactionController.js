const userTransactionService = require("../services/userTransactionService");

exports.getUserTransaction = async (req, res, next) => {
  try {
    const page = parseInt(req.query.page, 10) || 1;
    const limit = parseInt(req.query.limit, 10) || 10;
    const userTransaction = await userTransactionService.getUserTransactions(page, limit);
    res.status(201).json(userTransaction);
  } catch (error) {
    next(error);
  }
};
