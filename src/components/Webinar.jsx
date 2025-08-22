import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const WebinarForm = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    education: '',
    profession: '',
    goals: '',
    hearAbout: '',
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
      const response = await fetch('https://idea-0lof.onrender.com/api/webinar', {
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
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          education: '',
          profession: '',
          goals: '',
          hearAbout: '',
        });
      } else {
        if (response.status === 409) {
          if (data.error.toLowerCase().includes('email')) {
            setErrorMessage('⚠️ Email already registered.');
          } else if (data.error.toLowerCase().includes('phone')) {
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

      <h2 className="text-2xl font-bold mb-6 text-gray-800">Webinar Registration</h2>

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
        {/* First & Last Name */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">First Name *</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Last Name *</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            />
          </div>
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

        {/* Phone & Education */}
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
        </div>

        {/* Profession */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Select Profession *</label>
          <select
            name="profession"
            value={formData.profession}
            onChange={handleChange}
            required
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
          >
            <option value="">-- Choose Current Profession --</option>
            <option value="Student">Student</option>
            <option value="Intern">Intern</option>
            <option value="Job">Job</option>
          </select>
        </div>

        {/* Goals */}
        <div>
          <label className="block text-sm font-medium text-gray-700">What do you hope to learn? *</label>
          <textarea
            name="goals"
            value={formData.goals}
            onChange={handleChange}
            rows={3}
            required
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            placeholder="Your learning goals..."
          />
        </div>

        {/* How did you hear about us? */}
        <div>
          <label className="block text-sm font-medium text-gray-700">How did you hear about us? *</label>
          <select
            name="hearAbout"
            value={formData.hearAbout}
            onChange={handleChange}
            required
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
          >
            <option value="">-- Select --</option>
            <option value="Social Media">Social Media</option>
            <option value="Email">Email</option>
            <option value="Colleague">Colleague</option>
            <option value="Website">Website</option>
            <option value="Other">Other</option>
          </select>
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

export default WebinarForm;
