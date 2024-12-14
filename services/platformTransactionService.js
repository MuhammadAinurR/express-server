const { platformCashbacks, platforms } = require("../models");

exports.getPlatformTransactions = async (page = 1, limit = 10) => {
  const offset = (page - 1) * limit;
  const { rows, count } = await platformCashbacks.findAndCountAll({
    attributes: ["id", "userId", "balance"],
    include: [
      {
        model: platforms,
        attributes: ["name"],
      },
    ],
    order: [["createdAt", "DESC"]],
    limit,
    offset,
  });
  return {
    platformTransactions: rows.map((platformTransaction) => ({
      id: platformTransaction.id,
      userId: platformTransaction.userId,
      balance: platformTransaction.balance,
      platformName: platformTransaction.platform.name,
    })),
    totalPages: Math.ceil(count / limit),
  };
};
