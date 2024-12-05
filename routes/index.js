const express = require("express");
const router = express.Router();
const authRoutes = require("./auth");
const bindRoutes = require("./bind");
const eventRoutes = require("./event");
const cashbackRoutes = require("./cashback");
const authMiddleware = require("../middleware/authMiddleware");

router.use("/auth", authRoutes);
router.use("/bind", authMiddleware, bindRoutes);
router.use("/events", authMiddleware, eventRoutes);
router.use("/cashback", authMiddleware, cashbackRoutes);

module.exports = router;
