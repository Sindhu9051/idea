const express = require("express");
const router = express.Router();
const Bootcamp = require("../models/Bootcamp");

router.get("/", (req, res) => {
  res.json({ message: "Bootcamp API is working ✅" });
});

router.post("/", async (req, res) => {
  console.log("📩 Bootcamp POST received:", req.body);
  const { name, email, phone, course } = req.body;

  try {
    if (!email || !phone || !name) {
      return res.status(400).json({ error: "Name, Email and Phone are required." });
    }

    const existing = await Bootcamp.findOne({ $or: [{ email }, { phone }] });
    if (existing) {
      return res.status(409).json({ error: "Email or Phone already exists." });
    }

    const bootcamp = new Bootcamp({ name, email, phone, course });
    await bootcamp.save();

    res.json({ success: true, id: bootcamp._id });
  } catch (err) {
    console.error("❌ Bootcamp insert error:", err);
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;
