const { binds, platformCashbacks, ReferralCode, sequelize } = require("../models");

async function processCashback(uid, amount) {
  const t = await sequelize.transaction();

  const bind = await binds.findOne({ where: { uid }, transaction: t });
  if (!bind) {
    await t.rollback();
    return { status: 404, message: "User not found" };
  }

  if (bind.isBind !== "approved") {
    await t.rollback();
    return { status: 400, message: "User is not binded" };
  }

  const { userId, platformId } = bind;
  const [cashback, created] = await platformCashbacks.findOrCreate({
    where: { userId, platformId },
    defaults: { balance: amount },
    transaction: t,
  });

  if (!created) {
    const newBalance = Number(cashback.balance) + Number(amount);
    if (newBalance > Number.MAX_SAFE_INTEGER) {
      await t.rollback();
      return { status: 400, message: "Balance would exceed maximum safe value" };
    }

    await cashback.update({ balance: platformCashbacks.sequelize.literal(`balance + ${amount}`) }, { transaction: t });
  }

  await processReferral(userId, platformId, amount, t);

  await t.commit();
  return { status: 200, message: "Cashback sent" };
}

async function processReferral(userId, platformId, amount, transaction) {
  const referral = await ReferralCode.findOne({ where: { userId }, transaction });
  if (referral && referral.referredBy) {
    const referralAmount = amount * 0.1;
    const [referralCashback, referralCreated] = await platformCashbacks.findOrCreate({
      where: { userId: referral.referredBy, platformId },
      defaults: { balance: referralAmount },
      transaction,
    });

    if (!referralCreated) {
      await referralCashback.update(
        { balance: platformCashbacks.sequelize.literal(`balance + ${referralAmount}`) },
        { transaction }
      );
    }
  }
}

module.exports = {
  processCashback,
};
