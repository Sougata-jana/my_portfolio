import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-purple-600 via-indigo-500 to-blue-500 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link
              to="/"
              className="text-3xl font-bold text-white hover:text-yellow-300 transition duration-300 tracking-wide"
            >
              MY PORTFOLIO
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            <Link
              to="/"
              className="text-lg font-medium text-white hover:text-yellow-300 transition duration-300"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-lg font-medium text-white hover:text-yellow-300 transition duration-300"
            >
              About
            </Link>
            <Link
              to="/projects"
              className="text-lg font-medium text-white hover:text-yellow-300 transition duration-300"
            >
              Projects
            </Link>
            <Link
              to="/contact"
              className="text-lg font-medium text-white hover:text-yellow-300 transition duration-300"
            >
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-yellow-300 focus:outline-none transition duration-300"
            >
              <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-gradient-to-r from-purple-600 via-indigo-500 to-blue-500 shadow-md rounded-lg">
            <div className="px-4 pt-4 pb-4 space-y-2">
              <Link
                to="/"
                className="block text-lg font-medium text-white hover:text-yellow-300 transition duration-300"
              >
                Home
              </Link>
              <Link
                to="/about"
                className="block text-lg font-medium text-white hover:text-yellow-300 transition duration-300"
              >
                About
              </Link>
              <Link
                to="/projects"
                className="block text-lg font-medium text-white hover:text-yellow-300 transition duration-300"
              >
                Projects
              </Link>
              <Link
                to="/contact"
                className="block text-lg font-medium text-white hover:text-yellow-300 transition duration-300"
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}