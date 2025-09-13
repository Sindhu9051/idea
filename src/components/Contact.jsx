import React, { useState } from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaWhatsapp, FaYoutube } from 'react-icons/fa';

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const subject = encodeURIComponent(`Contact form submission from ${form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`
    );

    // mailto link dynamically create kar rahe hain
    window.location.href = `mailto:thegeniusesfactory@gmail.com?subject=${subject}&body=${body}`;

    // Alert ya form reset karna optional hai
    // alert("Thank you for reaching out! We'll get back to you soon.");
    // setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen flex bg-gradient-to-tr from-indigo-600 to-purple-600 text-gray-100">
      {/* Left Info Panel */}
      <div className="hidden md:flex flex-col justify-center p-16 w-1/3 bg-indigo-800 bg-opacity-80 rounded-l-lg">
        <h1 className="text-4xl font-extrabold mb-4">Get in Touch</h1>
        <p className="mb-6 text-indigo-200">
          We’d love to hear from you! Whether you have a question, want to
          collaborate, or just want to say hi, drop us a message.
        </p>

        <div>
          <h2 className="font-semibold text-indigo-300 mb-1">Email</h2>
          <p>thegeniusesfactory@gmail.com</p>
        </div>

        <div className="mt-6">
          <h2 className="font-semibold text-indigo-300 mb-1">Phone</h2>
          <p>+91 (920) 493-2231</p>
        </div>

        <div className="mt-6">
          <h4 className="text-xl font-semibold mb-4">Socials</h4>
          <div className="flex space-x-4 text-white">
            <a href="#"><FaFacebookF className="hover:text-indigo-400 transition" /></a>
            <a href="#"><FaTwitter className="hover:text-indigo-400 transition" /></a>
            <a href="#"><FaInstagram className="hover:text-indigo-400 transition" /></a>
            <a href="#"><FaLinkedinIn className="hover:text-indigo-400 transition" /></a>
            <a href="https://wa.me/919204932231?text=Hello%2C%20Geniuses-Factory%20support%20team%20please%20help%20me!"><FaWhatsapp className="hover:text-indigo-400 transition" /></a>
            <a href="#"><FaYoutube className="hover:text-indigo-400 transition" /></a>
          </div>
        </div>
      </div>

      {/* Right Form Panel */}
      <div className="flex flex-col justify-center p-10 w-full md:w-2/3 bg-white rounded-r-lg shadow-lg text-gray-900">
        <form onSubmit={handleSubmit} className="space-y-6">
          <h2 className="text-3xl font-bold mb-6 text-indigo-700 text-center">
            Contact Us
          </h2>

          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your Name"
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />

          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Your Email"
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />

          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Your Message"
            required
            rows="5"
            className="w-full px-4 py-3 border border-gray-300 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-indigo-500"
          ></textarea>

          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-md transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
