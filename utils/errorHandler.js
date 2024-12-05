function errorHandler(err, req, res, next) {
  console.log("error", err);
  console.error(err.stack || err);

  if (err.name === "Validation") {
    return res.status(400).json({ message: "Invalid input" });
  }

  if (err.name === "Unauthorized") {
    return res.status(401).json({ message: "Unauthorized" });
  }

  // Default to 500 server error
  res.status(500).json({ message: "Internal server error" });
}

module.exports = errorHandler;
