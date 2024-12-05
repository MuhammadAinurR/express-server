const express = require("express");
const { getBindData, updateBindStatus } = require("../controllers/bindController");

const router = express.Router();

router.get("/", getBindData);
router.patch("/:id/status", updateBindStatus);

module.exports = router;
