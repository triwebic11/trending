// routes/messages.js
const express = require("express");
const router = express.Router();
const Message = require("../models/Message");

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


router.post("/send", async (req, res) => {
  const { senderName, senderType, message, userId } = req.body;

  if (!senderName || !senderType || !message || !userId) {
    console.log("Missing fields", req.body); // log request body
    return res.status(400).json({ success: false, message: "Missing fields" });
  }

  try {
    const newMsg = new Message({
      senderName,
      senderType,
      message,
      userId,
    });

    const savedMsg = await newMsg.save();
    console.log("Saved Message:", savedMsg); // log saved message

    // Emit via Socket.IO
    // req.app.get("io").emit("receive_message", savedMsg._doc);
    req.app.get("io").emit("receive_message", savedMsg._doc);


    res.status(200).json(savedMsg); // return actual message object
  } catch (err) {
    console.error("Error saving message:", err); // log the real error
    res.status(500).json({ success: false, message: "Server error" });
  }
});






// Get messages for a specific user
router.get("/:userId", async (req, res) => {
  try {
    const userId = req.params.userId;
    const messages = await Message.find({ userId }); // ✅ MongoDB query

    await Message.updateMany({ userId, isRead: false }, { isRead: true });
    res.status(200).json(messages);
  } catch (error) {
    res.status(500).json({ error: "Failed to load user messages" });
  }
});


module.exports = router;
