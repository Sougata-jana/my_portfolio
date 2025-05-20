import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-gradient-to-r from-indigo-500 via-blue-300 to-teal-400 shadow-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            {/* <span className="bg-gradient-to-tr from-teal-400 via-blue-500 to-indigo-600 p-2 rounded-full shadow-lg">
              <svg className="h-8 w-8 text-white animate-spin-slow" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6l4 2" />
              </svg>
            </span> */}
            <Link
              to="/"
              className="text-3xl font-extrabold bg-clip-text text-transparent bg-gray-700 tracking-widest drop-shadow-lg hover:scale-110 transition-transform duration-300"
            >
              MY PORTFOLIO
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className="relative group text-lg font-semibold text-gray-800 px-2 py-1 transition"
            >
              Home
              <span className="absolute left-0 -bottom-1 w-0 h-1 bg-gradient-to-r from-teal-400 to-indigo-600 rounded-full group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link
              to="/about"
              className="relative group text-lg font-semibold text-gray-800 px-2 py-1 transition"
            >
              About
              <span className="absolute left-0 -bottom-1 w-0 h-1 bg-gradient-to-r from-pink-400 to-purple-600 rounded-full group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link
              to="/projects"
              className="relative group text-lg font-semibold text-gray-800 px-2 py-1 transition"
            >
              Projects
              <span className="absolute left-0 -bottom-1 w-0 h-1 bg-gradient-to-r from-yellow-400 to-pink-500 rounded-full group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link
              to="/contact"
              className="relative group text-lg font-semibold text-gray-800 px-2 py-1 transition"
            >
              Contact
              <span className="absolute left-0 -bottom-1 w-0 h-1 bg-gradient-to-r from-blue-400 to-teal-400 rounded-full group-hover:w-full transition-all duration-300"></span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-indigo-700 hover:text-teal-400 focus:outline-none transition duration-300"
              aria-label="Toggle menu"
            >
              <svg className="h-9 w-9" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7h16M4 12h16M4 17h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-white/90 backdrop-blur-md shadow-xl rounded-xl mt-2 animate-fade-in-down">
            <div className="px-6 pt-4 pb-6 space-y-4">
              <Link
                to="/"
                className="block text-lg font-semibold text-gray-800 hover:text-teal-500 transition"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/about"
                className="block text-lg font-semibold text-gray-800 hover:text-pink-500 transition"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Link
                to="/projects"
                className="block text-lg font-semibold text-gray-800 hover:text-yellow-500 transition"
                onClick={() => setIsOpen(false)}
              >
                Projects
              </Link>
              <Link
                to="/contact"
                className="block text-lg font-semibold text-gray-800 hover:text-blue-500 transition"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
      {/* Custom animation for logo */}
      <style>
        {`
          .animate-spin-slow {
            animation: spin 2.5s linear infinite;
          }
          @keyframes spin {
            0% { transform: rotate(0deg);}
            100% { transform: rotate(360deg);}
          }
        `}
      </style>
    </nav>
  );
}