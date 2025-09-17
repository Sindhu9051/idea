import React, { useState } from "react";

// eslint-disable-next-line no-unused-vars
import {motion} from 'framer-motion'

const fadeInLeft = {
hidden: { opacity: 0, x: -60 },
visible: { opacity: 1, x: 0, transition: { duration: 1 } },
};

const fadeInRight = {
hidden: { opacity: 0, x: 60 },
visible: { opacity: 1, x: 0, transition: { duration: 1 } },
};

const fadeInUp = {
hidden: { opacity: 0, y: 40 },
visible: { opacity: 1, y: 0, transition: { duration: 2 } },
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-gray-900 text-white shadow-md fixed w-full z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <motion.img 
                src="images/logo.png" 
                alt="Geniuses Factory" 
                className="h-17 w-17 p-2 cursor-pointer" 
                variants={fadeInRight}
                initial="hidden"
                animate="visible"
              />
              <h1 className="text-2xl font-bold">Geniuses Factory</h1>
            </div>
            

            {/* Desktop Menu */}
            <motion.div className="hidden md:flex space-x-8" variants={fadeInLeft} initial="hidden" animate="visible">
                <motion.a href="/" className="text-white font-bold hover:text-[#864993] transition"  whileHover={{ scale: 1.3 }}>
                  Home
                </motion.a>
                <motion.a href="/services" className="text-white font-bold hover:text-[#864993] transition"  whileHover={{ scale: 1.3 }}>
                  Services
                </motion.a>
                <motion.a href="/AllCrs" className="text-white font-bold hover:text-[#864993] transition"  whileHover={{ scale: 1.3 }}>
                  Courses
                </motion.a>
                <motion.a href="/verify-certificates" className="text-white font-bold hover:text-[#864993] transition"  whileHover={{ scale: 1.3 }}>
                  Verify Certificates
                </motion.a>
                <motion.a href="/about" className="text-white font-bold hover:text-[#864993] transition"  whileHover={{ scale: 1.3 }}>
                  About Us
                </motion.a>
                <motion.a href="/contact" className="text-white font-bold hover:text-[#864993] transition"  whileHover={{ scale: 1.3 }}>
                  Contact Us
                </motion.a>
          </motion.div>

          {/* Mobile Menu Button */}
          <motion.div className="md:hidden flex items-center me-10"  variants={fadeInRight} initial="hidden" animate="visible">
                <button onClick={toggleMenu} className="text-gray-700 focus:outline-2">
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        {isOpen ? (
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M6 18L18 6M6 6l12 12" />
                        ) : (
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 6h16M4 12h16M4 18h16"
                        />
                        )}
                    </svg>
                </button>
          </motion.div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div className="md:hidden px-4 pb-4 flex flex-col space-y-2 bg-gray-900" variants={fadeInUp} initial="hidden" animate="visible">
          <motion.a href="/" className="block py-2 text-white font-bold hover:text-slate-600">
            Home
          </motion.a>
          <motion.a href="/services" className="block py-2 text-white font-bold hover:text-slate-600"  whileHover={{ scale: 1.05 }}>
            Services
          </motion.a>
          <motion.a href="/AllCrs" className="block py-2 text-white font-bold hover:text-slate-600"  whileHover={{ scale: 1.05 }}>
            Courses
          </motion.a>
          <motion.a href="/verify-certificates" className="block py-2 text-white font-bold hover:text-slate-600"  whileHover={{ scale: 1.05 }}>
            Verify Certificates
          </motion.a>
          <motion.a href="/about" className="block py-2 text-white font-bold hover:text-slate-600"  whileHover={{ scale: 1.05 }}>
            About Us
          </motion.a>
          <motion.a href="/contact" className="block py-2 text-white font-bold hover:text-slate-600"  whileHover={{ scale: 1.05 }}>
            Contact Us
          </motion.a>
          
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
