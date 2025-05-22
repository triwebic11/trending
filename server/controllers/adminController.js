const Admin = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.loginAdmin = async (req, res) => {
  const { email, password } = req.body;
  const admin = await Admin.findOne({ email });

  if (!admin) return res.status(401).json({ msg: "Invalid email or password" });

  const isMatch = await bcrypt.compare(password, admin.password);
  if (!isMatch)
    return res.status(401).json({ msg: "Invalid email or password" });

  const token = jwt.sign({ id: admin._id }, process.env.JWT_SECRET, {
    expiresIn: "1h",
  });
  res.json({ token });
};

// Example: Add or delete data methods can go here (protected)
