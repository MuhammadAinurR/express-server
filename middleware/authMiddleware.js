const jwtUtils = require("../utils/jwtUtils");

const authMiddleware = (req, res, next) => {
  const bearerHeader = req.headers["authorization"];

  if (!bearerHeader) throw { name: "Unauthorized" };

  const bearer = bearerHeader.split(" ");
  if (bearer.length !== 2 || bearer[0] !== "Bearer") throw { name: "Unauthorized" };

  const token = bearer[1];

  try {
    const decoded = jwtUtils.verifyToken(token);
    req.user = decoded;
    next();
  } catch (error) {
    throw { name: "Unauthorized" };
  }
};

module.exports = authMiddleware;
