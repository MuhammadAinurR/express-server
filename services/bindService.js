const { binds, platforms } = require("../models");

const bindData = async () => {
  try {
    const bindData = await binds.findAll({
      attributes: ["userId", "uid", "isBind"],
      include: [
        {
          model: platforms,
          attributes: ["name"],
        },
      ],
    });

    return bindData.map((bind) => ({
      userId: bind.userId,
      uid: bind.uid,
      platformName: bind.platform.name,
      isBind: bind.isBind,
    }));
  } catch (error) {
    throw error;
  }
};

module.exports = { bindData };
