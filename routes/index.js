const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/authMiddleware");

// Routes imports
const authRoutes = require("./auth");
const bindRoutes = require("./bind");
const eventRoutes = require("./event");
const cashbackRoutes = require("./cashback");
const referralCodeRoutes = require("./referralCode");
const platformRoutes = require("./platform");

// Public routes
router.get("/", (req, res) => res.send("Server is up and running"));
router.use("/auth", authRoutes);

// Protected routes
router.use(authMiddleware);
router.use("/bind", bindRoutes);
router.use("/events", eventRoutes);
router.use("/cashback", cashbackRoutes);
router.use("/referral-codes", referralCodeRoutes);
router.use("/platforms", platformRoutes);

module.exports = router;
