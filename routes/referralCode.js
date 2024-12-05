const express = require("express");
const router = express.Router();
const referralCodeController = require("../controllers/referralCodeController");

router.get("/", referralCodeController.getReferralCodes);

module.exports = router;
