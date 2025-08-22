import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-gray-900 text-white shadow-md fixed w-full z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
            {/* Logo */}
            <img 
                src="images/xxxx.png" 
                alt="Skilledin" 
                className="h-15 w-30" 
            />

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
                <a href="/" className="text-white font-bold hover:text-[#864993] transition">
                Home
                </a>
                <a href="/AllCrs" className="text-white font-bold hover:text-[#864993] transition">
                Courses
                </a>
                <a href="/verify-certificates" className="text-white font-bold hover:text-[#864993] transition">
                Verify Certificates
                </a>
                <a href="/about" className="text-white font-bold hover:text-[#864993] transition">
                About Us
                </a>
                <a href="/contact" className="text-white font-bold hover:text-[#864993] transition">
                Contact Us
                </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
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
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 flex flex-col space-y-2 bg-gray-900">
          <a href="/" className="block py-2 text-white font-bold hover:text-slate-600">
            Home
          </a>
          <a href="/AllCrs" className="block py-2 text-white font-bold hover:text-slate-600">
            Courses
          </a>
          <a href="/verify-certificates" className="block py-2 text-white font-bold hover:text-slate-600">
            Verify Certificates
          </a>
          <a href="/about" className="block py-2 text-white font-bold hover:text-slate-600">
            About Us
          </a>
          <a href="/contact" className="block py-2 text-white font-bold hover:text-slate-600">
            Contact Us
          </a>
          
        </div>
      )}
    </nav>
  );
};

export default Navbar;
