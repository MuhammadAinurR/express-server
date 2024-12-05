const express = require("express");
const router = express.Router();
const cashbackController = require("../controllers/cashbackController");

router.post("/:uid/send", cashbackController.sendCashback);

module.exports = router;
