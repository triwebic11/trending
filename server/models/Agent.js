const mongoose = require("mongoose");

const agentSchema = new mongoose.Schema({
  agentNumber: { type: String, required: true },
  sites: { type: String, required: true },
  type: { type: String, required: true },
  uniqueId: { type: String, required: true, unique: true },
}, { timestamps: true });

module.exports = mongoose.model("Agent", agentSchema);
