const express = require("express");
const router = express.Router();
const authRoutes = require("./auth");
const bindRoutes = require("./bind");
const authMiddleware = require("../middleware/authMiddleware");

router.use("/auth", authRoutes);
router.use("/bind", authMiddleware, bindRoutes);

module.exports = router;
