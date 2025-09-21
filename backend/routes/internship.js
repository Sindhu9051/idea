const express = require("express");
const router = express.Router();
const Internship = require("../models/Internship");

router.get("/", (req, res) => {
  res.json({ message: "Internship API is working ✅" });
});

router.post("/", async (req, res) => {
  console.log("📦 Internship req.body:", req.body);
  try {
    const { fullName, email, phone } = req.body;

    // ✅ Trim to avoid blank spaces
    if (!fullName?.trim() || !email?.trim() || !phone?.trim()) {
      console.log("❌ Missing fields:", { fullName, email, phone });
      return res.status(400).json({ error: "Full Name, Email, and Phone are required." });
    }

    // ✅ Duplicate check
    const existing = await Internship.findOne({ $or: [{ email }, { phone }] });
    if (existing) {
      return res.status(409).json({ error: "Email or Phone already registered." });
    }

    const internship = new Internship(req.body);
    await internship.save();

    res.json({ success: true, id: internship._id });
  } catch (err) {
    console.error("❌ Internship Insert Error:", err);
    res.status(500).json({ error: "Server error. Try again later." });
  }
});
module.exports = router;