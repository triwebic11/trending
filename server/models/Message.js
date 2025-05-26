const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema({
  senderName: { type: String, required: true },
  senderType: { type: String, required: true },
  message: { type: String, required: true },
  userId: {
  type: String, // ✅ change from ObjectId to String
  required: true
},
isRead: { type: Boolean, default: false },

}, { timestamps: true }); // ✅ this adds createdAt and updatedAt

module.exports = mongoose.model("Message", messageSchema);
