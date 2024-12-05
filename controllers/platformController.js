const platformService = require("../services/platformService");

exports.getPlatforms = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const search = req.query.search || "";

    const result = await platformService.getPlatforms(page, limit, search);
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createPlatform = async (req, res) => {
  try {
    const platform = await platformService.createPlatform(req.body);
    res.status(201).json(platform);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updatePlatform = async (req, res) => {
  try {
    const platform = await platformService.updatePlatform(req.params.id, req.body);
    res.json(platform);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deletePlatform = async (req, res) => {
  try {
    await platformService.deletePlatform(req.params.id);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
