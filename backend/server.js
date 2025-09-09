const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 65136;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Server is working properly.");
});

app.use("/api/certificate", require("./routes/certificate"));
app.use("/api/webinar", require("./routes/webinar"));
app.use("/api/bootcamp", require("./routes/bootcamp"));
app.use("/api/internship", require("./routes/internship"));
app.use("/api/payment", require("./routes/payment"));

// Test route
app.get("/", (req, res) => {
  res.send("Server is running");
});

app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
