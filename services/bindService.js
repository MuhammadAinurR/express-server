const { binds, platforms } = require("../models");

const bindData = async (status, page = 1, limit = 10) => {
  try {
    const whereClause = status ? { isBind: status } : {};
    const offset = (page - 1) * limit;

    const { rows, count } = await binds.findAndCountAll({
      attributes: ["id", "userId", "uid", "isBind"],
      include: [
        {
          model: platforms,
          attributes: ["name"],
        },
      ],
      where: whereClause,
      order: [["createdAt", "DESC"]],
      limit,
      offset,
    });

    return {
      binds: rows.map((bind) => ({
        id: bind.id,
        userId: bind.userId,
        uid: bind.uid,
        platformName: bind.platform.name,
        isBind: bind.isBind,
      })),
      totalPages: Math.ceil(count / limit),
    };
  } catch (error) {
    throw error;
  }
};

const updateBindStatus = async (id, status) => {
  await binds.update({ isBind: status }, { where: { id } });
};

module.exports = { bindData, updateBindStatus };
