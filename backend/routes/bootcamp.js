const express = require("express");
const router = express.Router();
const { getDb } = require("../db");

const db = getDb("bootcamp-details");

router.post("/", async (req, res) => {
  console.log("Bootcamp POST received:", req.body);
  const { email, phone } = req.body;

  try {
    if (!email || !phone) {
      return res.status(400).json({ error: "Email and Phone are required." });
    }

    const selector = { selector: { $or: [{ email }, { phone }] } };
    const existing = await db.find(selector);

    if (existing.docs.length > 0) {
      return res.status(409).json({ error: "Email or Phone already exists." });
    }

    const response = await db.insert(req.body);
    console.log("Inserted bootcamp doc:", response);
    res.json({ success: true, id: response.id });
  } catch (err) {
    console.error("Bootcamp insert error:", err);
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;
