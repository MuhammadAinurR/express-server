const { cashbackHistory } = require("../models");
const { Op } = require("sequelize"); // Import Sequelize operators

exports.getWithdrawData = async (status, page = 1, limit = 10) => {
  // Build the where clause conditionally
  const whereClause = {
    type: "WITHDRAW", // Always include this condition
    ...(status && { status }), // Add status condition if provided
  };

  const offset = (page - 1) * limit;
  const { rows, count } = await cashbackHistory.findAndCountAll({
    where: whereClause, // Use the constructed where clause
    limit,
    offset,
  });

  return {
    withdrawData: rows.map((withdraw) => ({
      id: withdraw.id,
      userId: withdraw.userId,
      amount: withdraw.amount,
      status: withdraw.status,
      hashLink: withdraw.hashLink,
      network: withdraw.network,
      walletAddress: withdraw.walletAddress,
      createdAt: withdraw.createdAt,
      updatedAt: withdraw.updatedAt,
    })),
    totalPages: Math.ceil(count / limit),
  };
};
