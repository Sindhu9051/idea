const express = require("express");
const router = express.Router();
const { getDb } = require("../db");

const db = getDb("webinar-registrations");

router.post("/", async (req, res) => {
  const { email, phone } = req.body;

  try {
    const selector = {
      selector: {
        $or: [{ email }, { phone }],
      },
    };

    const existing = await db.find(selector);

    if (existing.docs.length > 0) {
      return res.status(409).json({ error: "Email or Phone already registered." });
    }

    const response = await db.insert(req.body);
    res.json({ success: true, id: response.id });

  } catch (err) {
  console.error("❌ webinar Insert Error:", err);
  res.status(500).json({ error: "Server error. Try again later." });
}

});

module.exports = router;
