const jwt = require("jsonwebtoken");

const protect = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1]; // 🔄 Token format fix (Bearer token)

  if (!token) return res.status(401).json({ msg: "No token provided" });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // 🔄 Now you get userId + role both
    next();
  } catch (err) {
    return res.status(401).json({ msg: "Token is not valid" });
  }
};

module.exports = protect;
