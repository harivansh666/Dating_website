const cookieParser = require("cookie-parser");
const logout = (req, res) => {
  res.clearCookie("token");
};

module.exports = { logout };
