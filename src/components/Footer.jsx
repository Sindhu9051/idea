import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaWhatsapp, FaYoutubeSquare, FaTelegram } from 'react-icons/fa';


const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer className="bg-gray-900 text-white relative z-10">
      <div className="max-w-7xl mx-auto px-6 py-14 grid md:grid-cols-4 sm:grid-cols-2 gap-10 relative z-10">

        {/* Brand & Description */}
        <div>
          <h2 className="text-3xl font-bold mb-4 text-white">Geniuses Factory</h2>
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
          <p className="text-blue-500 hover:underline mb-3 cursor-pointer"  onClick={() => navigate("/terms")}> Terms & Conditions </p>
          <p className="text-blue-500 hover:underline mb-3 cursor-pointer"  onClick={() => navigate("/refund")}>Refund & Cancellation</p>
          <p className="text-blue-500 hover:underline cursor-pointer"  onClick={() => navigate("/privacy")}>Privacy & Policy</p>
        </div>

        {/* Social Media */}
        <div>
          <h4 className="text-xl font-semibold mb-4">Follow Us</h4>
          <div className="flex space-x-4 text-white">
            <a href="https://www.facebook.com/profile.php?id=61581228530954"><FaFacebookF className="hover:text-indigo-400 transition" /></a>
            <a href="https://t.me/geniuses_factory"><FaTelegram className="hover:text-indigo-400 transition" /></a>
            <a href="https://www.instagram.com/geniusesfactory?igsh=bWp4OTk0bWo4YzRi"><FaInstagram className="hover:text-indigo-400 transition" /></a>
            <a href="https://www.linkedin.com/in/geniuses-factory-03263b384"><FaLinkedinIn className="hover:text-indigo-400 transition" /></a>
            <a href="https://wa.me/916204857037?text=Hello%2C%20Geniuses-Factory%20support%20team%20please%20help%20me!"><FaWhatsapp className="hover:text-indigo-400 transition" /></a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-700 py-6 text-center text-gray-400 text-sm">
        © {new Date().getFullYear(2025)} Geniuses Factory || All rights reserved.
      </div>

      {/* Decorative Background Blur */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-indigo-500/10 via-purple-500/10 to-pink-500/10 backdrop-blur-2xl pointer-events-none z-0"></div>
    </footer>
  );
};

export default Footer;
