// payment.js
const express = require("express");
const Razorpay = require("razorpay");
const crypto = require("crypto");
require("dotenv").config();

const router = express.Router();

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

// ✅ Test API
router.get("/", (req, res) => {
  res.json({ message: "Payment API is working ✅" });
});

// ✅ Create Order
router.post("/create-order", async (req, res) => {
  const { amount, currency, receipt } = req.body;

  if (!amount) {
    return res.status(400).json({ error: "Amount is required" });
  }

  const options = {
    amount: amount * 100, // paise me
    currency: currency || "INR",
    receipt: receipt || `receipt_${Date.now()}`,
  };

  try {
    const order = await razorpay.orders.create(options);
    res.json(order);
  } catch (error) {
    console.error("❌ Razorpay create order error:", error);
    res.status(500).json({ error: error.message });
  }
});


router.post("/verify-payment", (req, res) => {
  const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;

  const sign = razorpay_order_id + "|" + razorpay_payment_id;
  const expectedSign = crypto
    .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
    .update(sign.toString())
    .digest("hex");

  if (razorpay_signature === expectedSign) {
    return res.json({ success: true, message: "Payment verified successfully" });
  } else {
    return res.status(400).json({ success: false, message: "Invalid signature" });
  }
});

module.exports = router;