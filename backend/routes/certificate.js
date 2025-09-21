const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Certificate = require("../models/Certificate");

router.post("/", async (req, res) => {
  const { certificateId } = req.body;

  if (!certificateId) {
    return res.status(400).json({ success: false, error: "Certificate ID is required" });
  }

  try {
    // check valid MongoDB ObjectId
    if (!mongoose.Types.ObjectId.isValid(certificateId)) {
      return res.status(400).json({ success: false, error: "Invalid Certificate ID format" });
    }

    const certificate = await Certificate.findById(certificateId);

    if (!certificate) {
      return res.status(404).json({ success: false, error: "Certificate not found" });
    }

    return res.json({ success: true, data: certificate });
  } catch (err) {
    console.error("❌ Certificate Fetch Error:", err);
    return res.status(500).json({ success: false, error: "Internal Server Error" });
  }
});

module.exports = router;
