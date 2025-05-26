// routes/messages.js
const express = require("express");
const router = express.Router();
const Message = require("../models/Message");

// Get messages by userId
router.get("/:userId", async (req, res) => {
  try {
    const userId = req.params.userId;
    const messages = await Message.find({ userId }).sort({ timestamp: 1 });
    res.status(200).json(messages);
  } catch (err) {
    res.status(500).json({ success: false, message: "Failed to fetch user messages" });
  }
});


// Save new message
router.post("/send", async (req, res) => {
  const { senderName, senderType, message } = req.body;

  if (!senderName || !senderType || !message) {
    return res.status(400).json({ success: false, message: "Missing fields" });
  }

  const newMsg = new Message({ senderName, senderType, message });
  await newMsg.save();

  res.status(200).json({ success: true, message: "Message saved." });
});

// Get all messages
router.get("/all", async (req, res) => {
  try {
    const messages = await Message.find().sort({ timestamp: 1 });
    res.status(200).json(messages);
  } catch (err) {
    res
      .status(500)
      .json({ success: false, message: "Failed to fetch messages" });
  }
});

module.exports = router;
