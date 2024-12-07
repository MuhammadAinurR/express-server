const express = require("express");
const router = express.Router();
const referralCodeController = require("../controllers/referralCodeController");

router.get("/", referralCodeController.getReferralCodes);
router.get("/tree/:userId", referralCodeController.getReferralTree);

module.exports = router;
