const express = require("express");
const router = express.Router();
const { getDb } = require("../db");

const certificatesDb = getDb("certificates");

router.post("/", async (req, res) => {
  const { certificateId } = req.body;

  console.log("📄 Certificate request body:", req.body);

  try {
    if (!certificateId) {
      return res.status(400).json({ success: false, error: "Certificate ID is required" });
    }

    const certificate = await certificatesDb.get(certificateId);

    res.json({ success: true, data: certificate });
  } catch (err) {
    console.error("❌ Certificate Fetch Error:", err.message);
    res.status(404).json({ success: false, error: "Certificate not found" });
  }
});

module.exports = router;
