require("dotenv").config();
const express = require("express");
const http = require("http");
const mongoose = require("mongoose");
const socketIo = require("socket.io");
const cors = require("cors");

const agentRoutes = require("./routes/agentmanage");
const messageRoutes = require("./routes/messages");
const userRoutes = require("./routes/user"); // ✅ Updated, includes register + login
const Message = require("./models/Message");

const app = express();
app.use(
  cors({
    origin: ["https://win-pbu.com", "http://localhost:5173","https://api.win-pbu.com","http://localhost:5000"],
    credentials: true,
  })
);
app.use(express.json());

// ✅ MongoDB connection
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.error("❌ MongoDB Error:", err));

// ✅ Routes
app.use("/api", agentRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/user", userRoutes); // ✅ Register + Login route from user.js

app.get("/", (req, res) => {
  res.send("Hello from cPanel Node.js app!");
});

// ✅ Server + Socket.io setup
const server = http.createServer(app);
const io = socketIo(server, {
  cors: {
    origin: ["https://win-pbu.com", "http://localhost:5173","https://api.win-pbu.com"],
    methods: ["GET", "POST"],
    credentials: true,
  },
});

// Attach io instance to Express app to use in routes
app.set("io", io);

io.on("connection", (socket) => {
  console.log("⚡ User connected:", socket.id);

  socket.on("send_message", async (data) => {
    const { senderName, senderType, message, userId } = data;

    const newMsg = new Message({
      senderName,
      senderType,
      message,
      userId,
    });

    await newMsg.save();
    io.emit("receive_message", newMsg);
  });

  socket.on("disconnect", () => {
    console.log("⚠️ User disconnected:", socket.id);
  });
});


 


// ✅ Start the server
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
