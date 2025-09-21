const express = require("express");
const Razorpay = require("razorpay");
require("dotenv").config();

const router = express.Router();

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

router.get("/", (req, res) => {
  res.json({ message: "Payment API is working ✅" });
});

router.post("/create-order", async (req, res) => {
  const { amount, currency, receipt } = req.body;

  if (!amount) {
    return res.status(400).json({ error: "Amount is required" });
  }

  const options = {
    amount: amount * 100,
    currency: currency || "INR",
    receipt: receipt || `receipt_${new Date().getTime()}`,
  };

  try {
    const order = await razorpay.orders.create(options);
    res.json(order);
  } catch (error) {
    console.error("❌ Razorpay create order error:", error);
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
