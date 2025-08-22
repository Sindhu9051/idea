const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 65136;

// Middleware (order matters)
app.use(cors());
app.use(express.json()); // 🟢 THIS LINE is required to parse JSON body

app.get("/", (req, res) => {
  res.send("Server is working properly.");
});


// Routes
app.use("/api/certificate", require("./routes/certificate"));
app.use("/api/webinar", require("./routes/webinar"));
app.use("/api/bootcamp", require("./routes/bootcamp"));
app.use("/api/internship", require("./routes/internship"));

app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
