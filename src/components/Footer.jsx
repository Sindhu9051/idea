import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white relative z-10">
      <div className="max-w-7xl mx-auto px-6 py-14 grid md:grid-cols-4 sm:grid-cols-2 gap-10 relative z-10">

        {/* Brand & Description */}
        <div>
          <h2 className="text-3xl font-bold mb-4 text-white">Skilledin</h2>
          <p className="text-gray-400">Crafting digital experiences with style and soul.</p>
        </div>

        {/* Navigation */}
        <div>
          <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-gray-300">
            <li><a href="/" className="hover:text-white transition">Home</a></li>
            <li><a href="/about" className="hover:text-white transition">About</a></li>
            <li><a href="/AllCrs" className="hover:text-white transition">Courses</a></li>
            <li><a href="/contact" className="hover:text-white transition">Contact</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="text-xl font-semibold mb-4">Newsletter</h4>
          <p className="text-gray-400 mb-3">Stay updated with our latest news.</p>
          <p><Link to="/subscribe" className="text-blue-500 hover:underline mb-3">Terms & Conditions</Link></p>
          <p><Link to="/subscribe" className="text-blue-500 hover:underline mb-3">Refund & Cancellation</Link></p>
          <p><Link to="/subscribe" className="text-blue-500 hover:underline">Privacy & Policy</Link></p>
        </div>

        {/* Social Media */}
        <div>
          <h4 className="text-xl font-semibold mb-4">Follow Us</h4>
          <div className="flex space-x-4 text-white">
            <a href="#"><FaFacebookF className="hover:text-indigo-400 transition" /></a>
            <a href="#"><FaTwitter className="hover:text-indigo-400 transition" /></a>
            <a href="#"><FaInstagram className="hover:text-indigo-400 transition" /></a>
            <a href="#"><FaLinkedinIn className="hover:text-indigo-400 transition" /></a>
            <a href="#"><FaWhatsapp className="hover:text-indigo-400 transition" /></a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-700 py-6 text-center text-gray-400 text-sm">
        © {new Date().getFullYear(2025)} Skilledin || All rights reserved.
      </div>

      {/* Decorative Background Blur */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-indigo-500/10 via-purple-500/10 to-pink-500/10 backdrop-blur-2xl pointer-events-none z-0"></div>
    </footer>
  );
};

export default Footer;
