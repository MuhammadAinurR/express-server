const authService = require("../services/authService");

exports.login = async (req, res, next) => {
  const { username, password } = req.body;

  try {
    // Validate input
    if (!username || !password) throw { name: "Validation" };
    // Call the service to handle login
    const token = await authService.login(username, password);

    // Respond with token
    res.json({ token });
  } catch (error) {
    next(error);
  }
};
