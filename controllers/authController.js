const authService = require("../services/authService");

exports.login = async (req, res, next) => {
  const { username, password } = req.body;
  // Validate input
  if (!username || !password) throw { name: "Validation" };

  try {
    // Call the service to handle login
    const token = await authService.login(username, password);

    // Respond with token
    res.json({ token });
  } catch (error) {
    next(error);
  }
};
