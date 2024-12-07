const referralCodeService = require("../services/referralCodeService");

exports.getReferralCodes = async (req, res, next) => {
  const page = parseInt(req.query.page) || 1;
  const limit = 10; // Items per page

  try {
    const result = await referralCodeService.getReferralCodes(page, limit);
    res.json(result);
  } catch (error) {
    console.error(error);
    next(error);
  }
};

exports.getReferralTree = async (req, res, next) => {
  const { userId } = req.params;

  try {
    const tree = await referralCodeService.getReferralTree(userId);
    res.json(tree);
  } catch (error) {
    console.error(error);
    next(error);
  }
};
