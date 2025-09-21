const mongoose = require("mongoose");

const InternshipSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  dob: { type: String, required: true},
  gender: { type: String, required: true},
  nationality: { type: String, required: true },
  contact: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String, required: true, unique: true },
  currentAddress: String,
  permanentAddress: String,
  university: { type: String, required: true},
  degree: String,
  major: String,
  graduationYear: String,
  sgpa: { type: String, required: true },
  domain: { type: String, required: true},
  technicalSkills: { type: String, required: true},
  languagesKnown: String,
  certifications: String,
  motivation: String,
  careerGoals: String,
  referenceId: String,
  declaration: String,
  applicationDate: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});


module.exports = mongoose.model("Internship", InternshipSchema);
