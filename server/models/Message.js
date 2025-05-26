const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema({
  senderName: String,
  senderType: String,
  message: String,
 userId: {
    type: String, // changed from ObjectId to String
    required: true,
  },
  timestamp: {
    type: Date,
    default: Date.now
  },
});

module.exports = mongoose.model("Message", messageSchema);
