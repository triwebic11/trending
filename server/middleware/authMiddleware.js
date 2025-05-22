const jwt = require('jsonwebtoken');

const protect = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) return res.status(401).json({ msg: 'No token' });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.admin = decoded.id;
    next();
  } catch {
    res.status(401).json({ msg: 'Token is not valid' });
  }
};

module.exports = protect;
