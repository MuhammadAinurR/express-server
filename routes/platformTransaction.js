const express = require("express");
const router = express.Router();
const platformTransactionController = require("../controllers/platformTransactionController");

router.get("/", platformTransactionController.getPlatformTransaction);

module.exports = router;
