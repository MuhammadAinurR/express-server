const { platforms } = require("../models");
const { Op } = require("sequelize");

exports.getPlatforms = async (page = 1, limit = 10, search = "") => {
  const offset = (page - 1) * limit;
  const whereClause = search
    ? {
        [Op.or]: [{ name: { [Op.iLike]: `%${search}%` } }, { label: { [Op.iLike]: `%${search}%` } }],
      }
    : {};

  const result = await platforms.findAndCountAll({
    where: whereClause,
    limit: limit,
    offset: offset,
    order: [["name", "ASC"]],
    raw: true,
  });

  return {
    rows: result.rows,
    count: result.count,
    currentPage: page,
    totalPages: Math.ceil(result.count / limit),
  };
};

exports.createPlatform = async (platformData) => {
  return await platforms.create(platformData);
};

exports.updatePlatform = async (id, platformData) => {
  const platform = await platforms.findByPk(id);
  if (!platform) throw new Error("Platform not found");
  return await platform.update(platformData);
};

exports.deletePlatform = async (id) => {
  const platform = await platforms.findByPk(id);
  if (!platform) throw new Error("Platform not found");
  await platform.destroy();
  return true;
};
