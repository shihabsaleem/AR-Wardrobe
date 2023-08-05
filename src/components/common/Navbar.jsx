import React, { useState } from "react";
import Badge from "@mui/material/Badge";
import { Link } from "react-router-dom";
import { FaShoppingCart, FaUser, FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="h-20 bg-white/90 backdrop-blur-xl sticky top-0 z-[1000] border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center transform group-hover:scale-110 transition-transform">
            <span className="text-white font-bold text-xl">AR</span>
          </div>
          <span className="font-black text-2xl text-primary">
            WARDROBE
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <Link
            to="/"
            className="text-gray-700 font-medium hover:text-primary transition-colors relative group"
          >
            Home
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-600 group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link
            to="/category"
            className="text-gray-700 font-medium hover:text-primary transition-colors relative group"
          >
            Shop
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-600 group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link
            to="/about"
            className="text-gray-700 font-medium hover:text-primary transition-colors relative group"
          >
            About
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-600 group-hover:w-full transition-all duration-300"></span>
          </Link>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-4">
          {!localStorage.getItem('token') ? (
            <>
              <Link
                to="/login"
                className="hidden md:block text-gray-700 font-medium hover:text-purple-600 transition-colors"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="hidden md:block px-6 py-2.5 bg-primary text-white font-semibold rounded-full hover:scale-105 hover:bg-primary-dark transition-all shadow-lg shadow-primary/30"
              >
                Sign Up
              </Link>
            </>
          ) : (
            <Link
              to="/profile"
              className="hidden md:flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
            >
              <FaUser className="text-gray-600" />
              <span className="text-gray-700 font-medium">Profile</span>
            </Link>
          )}

          <Link
            to="/cart"
            className="relative p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <Badge badgeContent={0} color="error">
              <FaShoppingCart className="text-gray-700 text-xl" />
            </Badge>
          </Link>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            {mobileMenuOpen ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 right-0 bg-white border-b border-gray-200 shadow-lg">
          <div className="flex flex-col p-6 space-y-4">
            <Link
              to="/"
              className="text-gray-700 font-medium hover:text-purple-600 transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/category"
              className="text-gray-700 font-medium hover:text-purple-600 transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Shop
            </Link>
            <Link
              to="/about"
              className="text-gray-700 font-medium hover:text-purple-600 transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            {!localStorage.getItem('token') ? (
              <>
                <Link
                  to="/login"
                  className="text-gray-700 font-medium hover:text-purple-600 transition-colors py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-full text-center"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Sign Up
                </Link>
              </>
            ) : (
              <Link
                to="/profile"
                className="text-gray-700 font-medium hover:text-purple-600 transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Profile
              </Link>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
