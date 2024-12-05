const referralCodeService = require("../services/referralCodeService");

exports.getReferralCodes = async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = 10; // Items per page

  try {
    const result = await referralCodeService.getReferralCodes(page, limit);
    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch referral codes" });
  }
};
