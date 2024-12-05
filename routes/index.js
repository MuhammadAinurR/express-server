const express = require("express");
const router = express.Router();
const authRoutes = require("./auth");
const bindRoutes = require("./bind");
const eventRoutes = require("./event");
const authMiddleware = require("../middleware/authMiddleware");

router.use("/auth", authRoutes);
router.use("/bind", authMiddleware, bindRoutes);
router.use("/events", authMiddleware, eventRoutes);

module.exports = router;
