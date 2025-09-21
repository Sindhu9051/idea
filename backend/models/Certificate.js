const mongoose = require("mongoose");

const CertificateSchema = new mongoose.Schema({
  certificateId: { type: String},
  employeeId: { type: String },
  name: { type: String },
  course: { type: String },
  issuedDate: { type: Date, default: Date.now },
  internship: { type: String },
  duration: { type: String },
  mentor: { type: String },
  job: { type: String },
  company: { type: String },
  location: { type: String }
});

module.exports = mongoose.model("Certificate", CertificateSchema);
