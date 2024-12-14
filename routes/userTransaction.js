const express = require("express");
const router = express.Router();
const userTransactionController = require("../controllers/userTransactionController");

router.get("/", userTransactionController.getUserTransaction);

module.exports = router;
