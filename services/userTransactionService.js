const { cashbackHistory } = require("../models");

exports.getUserTransactions = async (page = 1, limit = 10) => {
  const offset = (page - 1) * limit;
  const { rows, count } = await cashbackHistory.findAndCountAll({
    limit,
    offset,
  });

  return {
    userTransactions: rows.map((userTransaction) => userTransaction),
    totalPages: Math.ceil(count / limit),
  };
};
