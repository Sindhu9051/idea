import React, { useState } from "react";
import emailjs from "@emailjs/browser";

export default function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    websiteType: "",
    idea: "",
    collaborate: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      websiteType: formData.websiteType,
      idea: formData.idea,
      collaborate: formData.collaborate ? "Yes" : "No",
    };

    emailjs
      .send(
        "service_62oh9pe",      // 🔁 Replace with your EmailJS service ID
        "template_9cd6pa5",     // 🔁 Replace with your EmailJS template ID
        templateParams,
        "XjVuE8Qyk8CXVoVi5"       // 🔁 Replace with your EmailJS public key
      )
      .then(
        (result) => {
          console.log("Email sent:", result.text);
          alert("✅ Thank you! We'll reach out to you soon.");
          setFormData({
            name: "",
            email: "",
            phone: "",
            websiteType: "",
            idea: "",
            collaborate: false,
          });
        },
        (error) => {
          console.error("Email send error:", error.text);
          alert("❌ Failed to send message. Please try again later.");
        }
      );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white flex items-center justify-center px-4 py-10">
      <div className="max-w-6xl w-full bg-white/80 backdrop-blur-md shadow-2xl rounded-2xl overflow-hidden grid grid-cols-1 md:grid-cols-2">

        {/* Left Branding Panel */}
        <div className="bg-gradient-to-br from-blue-700 to-blue-800 text-white p-10 flex flex-col justify-center">
          <h1 className="text-4xl font-bold leading-tight mb-4">Bring Your Website Idea to Life</h1>
          <p className="text-lg mb-6">
            Share your vision and collaborate with our expert team to build something amazing.
          </p>
          <ul className="space-y-3 text-sm">
            <li>🚀 Custom Development</li>
            <li>🎨 UI/UX Design Help</li>
            <li>🧠 Strategy & Branding</li>
            <li>🤝 Long-term Support</li>
          </ul>
          <div className="mt-8">
            <img src="https://illustrations.popsy.co/gray/web-design.svg" alt="Design Illustration" className="w-full h-auto" />
          </div>
        </div>

        {/* Right Form Panel */}
        <div className="p-10 bg-white">
          <h2 className="text-2xl font-semibold mb-6 text-gray-800">Let's Get Started</h2>
          <form onSubmit={handleSubmit} className="space-y-5">

            {/* Full Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="John Doe"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="you@example.com"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Mobile Number</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                placeholder="9876543210"
                pattern="[0-9]{10}"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>

            {/* Website Type */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Type of Website</label>
              <select
                name="websiteType"
                value={formData.websiteType}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
              >
                <option value="">-- Select --</option>
                <option value="portfolio">Portfolio</option>
                <option value="ecommerce">E-commerce</option>
                <option value="blog">Blog</option>
                <option value="startup">Startup / SaaS</option>
                <option value="educational">Educational</option>
                <option value="other">Other</option>
              </select>
            </div>

            {/* Idea / Description */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Your Idea / Description</label>
              <textarea
                name="idea"
                value={formData.idea}
                onChange={handleChange}
                rows="5"
                required
                placeholder="Describe your website idea in detail..."
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>

            {/* Collaborate */}
            <div className="flex items-center">
              <input
                type="checkbox"
                name="collaborate"
                checked={formData.collaborate}
                onChange={handleChange}
                className="mr-2"
              />
              <label className="text-sm text-gray-700">
                I want to collaborate with your team on this project
              </label>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition"
            >
              🚀 Submit Your Idea
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
