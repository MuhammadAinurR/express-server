const jwt = require("jsonwebtoken");
const { internalUser } = require("../models");
const { comparePassword } = require("../utils/passwordUtils");

const JWT_SECRET = process.env.JWT_SECRET || "your_jwt_secret_key";

exports.login = async (username, password) => {
  // Find user by username
  const user = await internalUser.findOne({ where: { username } });
  if (!user) {
    throw new Error("Invalid username or password");
  }

  // Compare passwords
  const isPasswordValid = await comparePassword(password, user.password);
  if (!isPasswordValid) {
    throw new Error("Invalid username or password");
  }

  // Generate JWT
  return jwt.sign({ id: user.id, role: user.role }, JWT_SECRET, {
    expiresIn: "1h",
  });
};
