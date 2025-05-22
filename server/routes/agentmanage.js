const express = require("express");
const Agent = require("../models/Agent");
const router = express.Router();
const Counter = require("../models/Counter");


router.post("/agent", async (req, res) => {
  try {
    const { agentNumber, sites, type } = req.body;

    if (!agentNumber || !sites || !type) {
      return res.status(400).json({ message: "সব ফিল্ড অবশ্যই পূরণ করতে হবে।" });
    }

    const lastAgent = await Agent.findOne().sort({ createdAt: -1 });
    let nextId = lastAgent ? parseInt(lastAgent.uniqueId, 10) + 1 : 1;

    let uniqueId;
    let isUnique = false;

    while (!isUnique) {
      const exists = await Agent.findOne({ uniqueId: nextId.toString().padStart(2, "0") });
      if (!exists) {
        uniqueId = nextId.toString().padStart(2, "0");
        isUnique = true;
      } else {
        nextId++; // conflict হলে আরেকবার try করবে
      }
    }

    const newAgent = new Agent({
      agentNumber,
      sites,
      type,
      uniqueId,
    });

    await newAgent.save();

    res.status(201).json({ message: "Agent saved successfully", agent: newAgent });
  } catch (error) {
    console.error("Agent সংরক্ষণে ত্রুটি:", error);
    res.status(500).json({ message: "সার্ভার সমস্যা" });
  }
});


// GET - Fetch all agents
router.get("/agent", async (req, res) => {
  try {
    const agents = await Agent.find().sort({ createdAt: 1 });
    res.status(200).json(agents);
  } catch (error) {
    console.error("Error fetching agents:", error);
    res.status(500).json({ message: "Server error" });
  }
});

// DELETE /api/agent/:id - Delete an agent by ID
router.delete("/agent/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deletedAgent = await Agent.findByIdAndDelete(id);

    if (!deletedAgent) {
      return res.status(404).json({ message: "Agent not found" });
    }

    res.status(200).json({ message: "Agent deleted successfully", agent: deletedAgent });
  } catch (error) {
    console.error("Error deleting agent:", error);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
