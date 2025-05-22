require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const authRoutes = require("./routes/auth");
const agentRoutes = require("./routes/agentmanage");

const app = express();
app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.error(err));

app.use("/api", authRoutes);
app.use("/api", agentRoutes);

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
