require("dotenv").config();
const express = require("express");
const http = require("http");
const mongoose = require("mongoose");
const socketIo = require("socket.io");
const cors = require("cors");
const authRoutes = require("./routes/auth");
const agentRoutes = require("./routes/agentmanage");
const Message = require("./models/Message");

const app = express();
app.use(
  cors({
    origin: ["https://win-pbu.com", "http://localhost:5173"],
    credentials: true,
  })
);
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })

  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.error(err));

app.use("/api", authRoutes);
app.use("/api", agentRoutes);

// Server and Socket Setup
const server = http.createServer(app);
const io = socketIo(server, {
  cors: {
    origin: ["https://win-pbu.com", "http://localhost:5173"], // React frontend
    methods: ["GET", "POST"],
    credentials: true,
  },
});

// Socket.io Events
io.on("connection", (socket) => {
  console.log("⚡ User connected:", socket.id);

  socket.on("send_message", async (data) => {
    const newMsg = new Message(data);
    await newMsg.save();
    io.emit("receive_message", data);
  });

  socket.on("disconnect", () => {
    console.log("⚠️ User disconnected:", socket.id);
  });
});

// Routes
const messageRoutes = require("./routes/messages");
app.use("/api/messages", messageRoutes);

app.get("/", (req, res) => {
  res.send("Hello from cPanel Node.js app!");
});

server.listen(5000, () => {
  console.log("🚀 Server (with socket.io) running on port 5000");
});
