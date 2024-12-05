const { ReferralCode } = require("../models");

class ReferralCodeService {
  async getReferralCodes(page, limit) {
    const offset = (page - 1) * limit;

    const { count, rows } = await ReferralCode.findAndCountAll({
      limit,
      offset,
      raw: true,
    });

    const totalPages = Math.ceil(count / limit);
    const sanitizedReferralCodes = rows.map(({ createdAt, updatedAt, ...rest }) => rest);

    return {
      data: sanitizedReferralCodes,
      currentPage: page,
      totalPages,
      totalItems: count,
    };
  }
}

module.exports = new ReferralCodeService();
