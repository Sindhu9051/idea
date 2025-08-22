import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const BootcampForm = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    education: "",
    occupation: "",
    github: "",
    motivation: "",
    track: "",
    consent: false,
  });

  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccessMessage('');
    setErrorMessage('');

    try {
      const response = await fetch('https://idea-0lof.onrender.com/api/bootcamp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSuccessMessage('✅ Registration successful!');
        setFormData({
          name: "",
          email: "",
          phone: "",
          location: "",
          education: "",
          occupation: "",
          github: "",
          motivation: "",
          track: "",
          consent: false,
        });
      } else {
        if (response.status === 409) {
          if (data.error?.toLowerCase().includes('email')) {
            setErrorMessage('⚠️ Email already registered.');
          } else if (data.error?.toLowerCase().includes('phone')) {
            setErrorMessage('⚠️ Phone number already registered.');
          } else {
            setErrorMessage('⚠️ Duplicate registration detected.');
          }
        } else {
          setErrorMessage(data.error || '❌ Submission failed. Please try again.');
        }
      }
    } catch (err) {
      console.error('Submission error:', err);
      setErrorMessage('❌ Network error. Please try again later.');
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-20 bg-white shadow-md rounded-md min-h-screen flex flex-col items-center relative">
      {/* 🔙 Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="cursor-pointer mb-5 mt-4 bg-[#864993] text-white px-4 py-2 rounded-md self-start"
      >
        ← Back
      </button>

      <h2 className="text-2xl font-bold mb-6 text-gray-800">Bootcamp Registration</h2>

      {/* Overlay messages - Success and Error */}
      {(successMessage || errorMessage) && (
        <div className="fixed inset-0 flex items-center justify-center bg-opacity-10 z-10">
          <div
            className={`p-6 rounded-md shadow-lg text-center text-xl font-semibold ${
              successMessage
                ? 'bg-green-100 text-green-700'
                : 'bg-red-100 text-red-700'
            }`}
          >
            {successMessage || errorMessage}
            <button
              onClick={() => {
                setSuccessMessage('');
                setErrorMessage('');
              }}
              className="block mt-4 text-sm relative left-40 rounded-md bg-[#3beb41] text-blue-600 cursor-pointer px-7 py-2"
            >
              Close
            </button>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6 w-full max-w-lg relative">
        {/* Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Full Name *</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Email Address *</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
          />
        </div>

        {/* Phone & Location */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Phone Number *</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Location *</label>
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              required
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            />
          </div>
        </div>

        {/* Education & Occupation */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Education *</label>
            <input
              type="text"
              name="education"
              value={formData.education}
              onChange={handleChange}
              required
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Occupation *</label>
            <input
              type="text"
              name="occupation"
              value={formData.occupation}
              onChange={handleChange}
              required
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            />
          </div>
        </div>

        {/* GitHub */}
        <div>
          <label className="block text-sm font-medium text-gray-700">GitHub Profile URL *</label>
          <input
            type="url"
            name="github"
            value={formData.github}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
          />
        </div>

        {/* Motivation */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Why do you want to join? *</label>
          <textarea
            name="motivation"
            value={formData.motivation}
            onChange={handleChange}
            rows={3}
            required
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            placeholder="Briefly explain your motivation..."
          />
        </div>

        {/* Track */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Preferred Track *</label>
          <select
            name="track"
            value={formData.track}
            onChange={handleChange}
            required
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
          >
            <option value="">-- Select Track --</option>
            <option value="Frontend">Frontend</option>
            <option value="Backend">Backend</option>
            <option value="Fullstack">Fullstack</option>
            <option value="Data Science">Data Science</option>
            <option value="Html & Css">Html & Css</option>
            <option value="C programming">C programming</option>
            <option value="Python">Python</option>
            <option value="Hacking">Hacking</option>
          </select>
        </div>

        {/* Consent */}
        <div className="flex items-center space-x-2">
          <input
            type="checkbox"
            name="consent"
            checked={formData.consent}
            onChange={handleChange}
            required
            className="h-4 w-4 text-blue-600 border-gray-300 rounded"
          />
          <label className="text-sm text-gray-700">
            I agree to the terms and conditions *
          </label>
        </div>

        {/* Submit Button */}
        <div className="pt-4">
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
          >
            Register
          </button>
        </div>
      </form>
    </div>
  );
};

export default BootcampForm;
