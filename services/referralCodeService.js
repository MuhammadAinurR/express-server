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

  async getReferralTree(userId) {
    const currentUser = await ReferralCode.findOne({
      where: { userId },
      raw: true,
    });

    if (!currentUser) return null;

    // Build array of ancestors (including current user)
    const buildAncestorChain = async (startUserId) => {
      const chain = [];
      let current = await ReferralCode.findOne({
        where: { userId: startUserId },
        raw: true,
      });

      while (current) {
        chain.unshift(current);
        if (!current.referredBy) break;

        current = await ReferralCode.findOne({
          where: { userId: current.referredBy },
          raw: true,
        });
      }

      return chain;
    };

    // Build descendant tree for a given user
    const buildDescendantTree = async (userId) => {
      const user = await ReferralCode.findOne({
        where: { userId },
        raw: true,
      });

      const children = await ReferralCode.findAll({
        where: { referredBy: userId },
        raw: true,
      });

      return {
        userId: user.userId,
        referralCode: user.referralCode,
        children: await Promise.all(children.map((child) => buildDescendantTree(child.userId))),
      };
    };

    // Build combined tree from ancestor chain and descendants
    const buildRelevantTree = async (ancestors) => {
      if (!ancestors.length) return null;

      const [current, ...rest] = ancestors;

      if (current.userId === userId) {
        // If this is the current user, include all their descendants
        return await buildDescendantTree(userId);
      }

      return {
        userId: current.userId,
        referralCode: current.referralCode,
        children: rest.length ? [await buildRelevantTree(rest)] : [],
      };
    };

    const ancestorChain = await buildAncestorChain(userId);
    return buildRelevantTree(ancestorChain);
  }
}

module.exports = new ReferralCodeService();
