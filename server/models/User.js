const mongoose = require("mongoose");
const { v4: uuidv4 } = require("uuid");

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  uniqueId: { type: String, default: uuidv4 },
  role: { type: String, default: "user" },
});

module.exports = mongoose.model("User", userSchema);
