import React, { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedinIn,
  FaTwitter,
  FaInstagram,
  FaTelegram,
  FaEnvelope,
  FaFacebook,
} from "react-icons/fa";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Message from ${form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`
    );
    window.location.href = `mailto:support@geniusesfactory.com?subject=${subject}&body=${body}`;
    alert("Thanks for reaching out! We'll get back soon 🚀");
  };

  const fadeIn = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#050505] via-[#0c0c1d] to-[#1a1a40] flex items-center justify-center px-6 py-16 text-gray-100 font-sans">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
        className="relative w-full max-w-5xl bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 md:p-12 shadow-[0_0_30px_rgba(0,0,0,0.3)]"
      >
        {/* Animated Border Glow */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500 to-indigo-600 opacity-20 blur-2xl animate-pulse"></div>

        {/* Header */}
        <motion.div
          variants={fadeIn}
          className="relative text-center mb-10 z-10"
        >
          <h1 className="text-5xl font-extrabold bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-500 bg-clip-text text-transparent">
            Let’s Build Something Great
          </h1>
          <p className="text-gray-400 mt-3 text-sm md:text-base">
            Have a project, idea, or just want to say hi? Let’s connect.
          </p>
        </motion.div>

        {/* Form */}
        <motion.form
          variants={fadeIn}
          onSubmit={handleSubmit}
          className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your Name"
            required
            className="bg-[#0e0e1f] border border-gray-800 rounded-xl px-4 py-3 text-gray-200 focus:ring-2 focus:ring-purple-500 outline-none"
          />
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Your Email"
            required
            className="bg-[#0e0e1f] border border-gray-800 rounded-xl px-4 py-3 text-gray-200 focus:ring-2 focus:ring-purple-500 outline-none"
          />
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Your Message"
            rows="5"
            required
            className="md:col-span-2 bg-[#0e0e1f] border border-gray-800 rounded-xl px-4 py-3 text-gray-200 resize-none focus:ring-2 focus:ring-purple-500 outline-none"
          ></textarea>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            type="submit"
            className="md:col-span-2 w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-purple-700 hover:to-pink-600 text-white font-semibold py-3 rounded-xl transition-all duration-200 shadow-lg shadow-purple-500/20"
          >
            Send Message 🚀
          </motion.button>
        </motion.form>

        {/* Socials */}
        <motion.div
          variants={fadeIn}
          className="relative z-10 mt-10 text-center"
        >
          <p className="text-gray-400 mb-3">Connect on Socials</p>
          <div className="flex justify-center space-x-6 text-xl">
            <a
              href="https://www.facebook.com/share/1Zy3f9KNrk/"
              className="hover:text-purple-400 transition"
            >
              <FaFacebook />
            </a>
            <a
              href="https://www.linkedin.com/in/geniuses-factory-03263b384/"
              className="hover:text-purple-400 transition"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://x.com/geniusesfactory"
              className="hover:text-purple-400 transition"
            >
              <FaTwitter />
            </a>
            <a
              href="https://www.instagram.com/geniusesfactory?igsh=bWp4OTk0bWo4YzRi"
              className="hover:text-purple-400 transition"
            >
              <FaInstagram />
            </a>
            <a
              href="https://t.me/geniuses_factory"
              className="hover:text-purple-400 transition"
            >
              <FaTelegram />
            </a>
            <a
              href="mailto:support@geniusesfactory.com"
              className="hover:text-purple-400 transition"
            >
              <FaEnvelope />
            </a>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
