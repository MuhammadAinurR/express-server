const express = require("express");
const { getBindData } = require("../controllers/bindController");

const router = express.Router();

router.get("/", getBindData);

module.exports = router;
