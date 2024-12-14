const express = require("express");
const router = express.Router();
const withdrawController = require("../controllers/withdrawController");

router.get("/", withdrawController.getWithdrawData);

module.exports = router;
