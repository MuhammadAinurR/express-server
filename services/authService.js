const { internalUser } = require("../models");
const { signToken } = require("../utils/jwtUtils");

exports.login = async (username, password) => {
  try {
    // Find user by username
    const user = await internalUser.findOne({ where: { username } });
    if (!user) throw { name: "Unauthorized" };

    // Use the model's validPassword method to compare passwords
    const isPasswordValid = await user.validPassword(password);
    if (!isPasswordValid) throw { name: "Unauthorized" };

    // Generate JWT
    return signToken({ id: user.id, role: user.role });
  } catch (err) {
    throw err;
  }
};
