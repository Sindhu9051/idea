const express = require("express");
const cors = require("cors");
require("dotenv").config();
const connectDB = require("./db");

const app = express();
const PORT = process.env.PORT || 5000;


connectDB();


app.use(cors({
  origin: ["http://localhost:5173"],
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));


app.use(express.json());


app.get("/", (req, res) => {
  res.send("Server is running properly 🚀");
});


app.use("/api/certificate", require("./routes/certificate"));
app.use("/api/bootcamp", require("./routes/bootcamp"));
app.use("/api/internship", require("./routes/internship"));
app.use("/api/payment", require("./routes/payment"));


app.use((err, req, res, next) => {
  console.error("❌ Server Error:", err.stack);
  res.status(500).json({ error: "Internal Server Error" });
});


app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
