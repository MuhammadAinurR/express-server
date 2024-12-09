function errorHandler(err, req, res, next) {
  console.log("error", err);
  console.error(err.stack || err);

  // Add Sequelize connection error handling
  if (
    err.name === "SequelizeConnectionRefusedError" ||
    err.name === "SequelizeConnectionError" ||
    err.name === "SequelizeConnectionTimedOutError"
  ) {
    return res.status(503).json({
      message: "Database connection error, please try again later",
      error: process.env.NODE_ENV === "development" ? err.message : undefined,
    });
  }

  if (err.name === "Validation") {
    return res.status(400).json({ message: "Invalid input" });
  }

  if (err.name === "Unauthorized") {
    return res.status(401).json({ message: "Unauthorized" });
  }

  if (err.name === "NotFound") {
    return res.status(404).json({ message: "Not found" });
  }

  // Default to 500 server error
  res.status(500).json({ message: "Internal server error" });
}

module.exports = errorHandler;
