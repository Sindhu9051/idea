// src/components/InternshipForm.jsx

import React, { useState } from "react";

const InternshipForm = () =>
   {
  const [formData, setFormData] = useState({
    fullName: "",
    dob: "",
    gender: "",
    nationality: "",
    contact: "",
    email: "",
    currentAddress: "",
    permanentAddress: "",
    university: "",
    degree: "",
    major: "",
    graduationYear: "",
    sgpa: "",
    domain: "",
    technicalSkills: "",
    languagesKnown: "",
    certifications: "",
    motivation: "",
    careerGoals: "",
    referenceId: "",
    declaration:
      "I hereby declare that the information provided is true to the best of my knowledge.",
    applicationDate: new Date().toISOString().split("T")[0],
    phone: "", // Make sure phone exists here as per backend needs
  });

  

  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccessMessage("");
    setErrorMessage("");
    setLoading(true);

    try {
      const response = await fetch("https://api.geniusesfactory.com/api/internship", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData), // Send JSON
      });

      const data = await response.json();

      if (response.ok) {
        setSuccessMessage("✅ Registration successful!");
        setFormData({
          fullName: "",
          dob: "",
          gender: "",
          nationality: "",
          contact: "",
          email: "",
          currentAddress: "",
          permanentAddress: "",
          university: "",
          degree: "",
          major: "",
          graduationYear: "",
          sgpa: "",
          domain: "",
          technicalSkills: "",
          languagesKnown: "",
          certifications: "",
          motivation: "",
          careerGoals: "",
          referenceId: "",
          declaration:
            "I hereby declare that the information provided is true to the best of my knowledge.",
          applicationDate: new Date().toISOString().split("T")[0],
          phone: "",
        });
      } else {
        setErrorMessage(data.error || "❌ Submission failed. Please try again.");
      }
    } catch (err) {
      console.error("Submission error:", err);
      setErrorMessage("❌ Network error. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-8 bg-white shadow rounded py-20">

      {/* 🔙 Back Button */}
      <button
        onClick={() => window.history.back()}
        className="cursor-pointer mb-5 mt-4 bg-[#864993] text-white px-4 py-2 rounded-md self-start"
      >
        ← Back
      </button>


      <h2 className="text-2xl font-bold mb-4">Internship Registration Form</h2>

      {(successMessage || errorMessage) && (
        <div className="fixed inset-0 flex items-center justify-center bg-opacity-10 z-10">
          <div
            className={`p-6 rounded-md shadow-lg text-center text-xl font-semibold ${
              successMessage
                ? "bg-green-100 text-green-700"
                : "bg-red-100 text-red-700"
            }`}
          >
            {successMessage || errorMessage}
            <button
              onClick={() => {
                setSuccessMessage("");
                setErrorMessage("");
              }}
              className="block mt-4 text-sm rounded-md bg-[#3beb41] text-blue-600 cursor-pointer px-7 py-2"
            >
              Close
            </button>
          </div>
        </div>
      )}

      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        <Input
          label="Full Name"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          required
        />
        <Input
          label="Date of Birth"
          name="dob"
          type="date"
          value={formData.dob}
          onChange={handleChange}
          required
        />
        <Select
          label="Gender"
          name="gender"
          value={formData.gender}
          onChange={handleChange}
          options={["Male", "Female", "Other"]}
          required
        />
        <Input
          label="Nationality"
          name="nationality"
          value={formData.nationality}
          onChange={handleChange}
          required
        />
        <Input
          label="Contact No"
          name="contact"
          value={formData.contact}
          onChange={handleChange}
          required
        />
        <Input
          label="Email Address"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <Input
          label="Phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
        />
        <Input
          label="Current Address"
          name="currentAddress"
          value={formData.currentAddress}
          onChange={handleChange}
          required
        />
        <Input
          label="Permanent Address"
          name="permanentAddress"
          value={formData.permanentAddress}
          onChange={handleChange}
          required
        />
        <Input
          label="University / College"
          name="university"
          value={formData.university}
          onChange={handleChange}
          required
        />
        <Input
          label="Degree Program"
          name="degree"
          value={formData.degree}
          onChange={handleChange}
          required
        />
        <Input
          label="Major / Field of Study"
          name="major"
          value={formData.major}
          onChange={handleChange}
          required
        />
        <Input
          label="Year of Study / Graduation Year"
          name="graduationYear"
          value={formData.graduationYear}
          onChange={handleChange}
          required
        />
        <Input
          label="SGPA / Academic Performance"
          name="sgpa"
          value={formData.sgpa}
          onChange={handleChange}
          required
        />
        <Input
          label="Domain"
          name="domain"
          value={formData.domain}
          onChange={handleChange}
          required
        />
        <Input
          label="Technical Skills"
          name="technicalSkills"
          value={formData.technicalSkills}
          onChange={handleChange}
          required
        />
        <Input
          label="Languages Known"
          name="languagesKnown"
          value={formData.languagesKnown}
          onChange={handleChange}
          required
        />
        <Input
          label="Certifications"
          name="certifications"
          value={formData.certifications}
          onChange={handleChange}
        />
        <Textarea
          label="Why do you want to do this internship?"
          name="motivation"
          value={formData.motivation}
          onChange={handleChange}
          required
        />
        <Textarea
          label="Career Goals"
          name="careerGoals"
          value={formData.careerGoals}
          onChange={handleChange}
          required
        />
        <Input
          label="Reference ID"
          name="referenceId"
          value={formData.referenceId}
          onChange={handleChange}
        />
        <Textarea
          label="Declaration"
          name="declaration"
          value={formData.declaration}
          onChange={handleChange}
          required
        />
        <Input
          label="Date of Application"
          name="applicationDate"
          type="date"
          value={formData.applicationDate}
          onChange={handleChange}
          required
        />
        <div className="md:col-span-2">
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
          >
            {loading ? "Submitting..." : "Submit Application"}
          </button>
        </div>
      </form>
    </div>
  );
};

// Helper components
const Input = ({ label, name, value, onChange, type = "text", required }) => (
  <div>
    <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      required={required}
      className="w-full border border-gray-300 rounded-md p-2"
    />
  </div>
);

const Select = ({ label, name, value, onChange, options = [], required }) => (
  <div>
    <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
    <select
      name={name}
      value={value}
      onChange={onChange}
      required={required}
      className="w-full border border-gray-300 rounded-md p-2"
    >
      <option value="">-- Select --</option>
      {options.map((opt) => (
        <option key={opt} value={opt}>
          {opt}
        </option>
      ))}
    </select>
  </div>
);

const Textarea = ({ label, name, value, onChange, rows = 3, required }) => (
  <div className="md:col-span-2">
    <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
    <textarea
      name={name}
      value={value}
      onChange={onChange}
      rows={rows}
      required={required}
      className="w-full border border-gray-300 rounded-md p-2"
    />
  </div>
);

export default InternshipForm;
