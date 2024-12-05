const platformService = require("../services/platformService");

exports.getPlatforms = async (req, res, next) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const search = req.query.search || "";

    const result = await platformService.getPlatforms(page, limit, search);
    res.json(result);
  } catch (error) {
    next(error);
  }
};

exports.createPlatform = async (req, res, next) => {
  try {
    const platform = await platformService.createPlatform(req.body);
    res.status(201).json(platform);
  } catch (error) {
    next(error);
  }
};

exports.updatePlatform = async (req, res, next) => {
  try {
    const platform = await platformService.updatePlatform(req.params.id, req.body);
    res.json(platform);
  } catch (error) {
    next(error);
  }
};

exports.deletePlatform = async (req, res, next) => {
  try {
    await platformService.deletePlatform(req.params.id);
    res.status(204).send();
  } catch (error) {
    next(error);
  }
};
