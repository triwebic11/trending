// models/Message.js
const mongoose = require("mongoose");

const MessageSchema = new mongoose.Schema({
  senderName: String,
  senderType: String, // 'user' or 'admin'
  message: String,
  timestamp: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Message", MessageSchema);
