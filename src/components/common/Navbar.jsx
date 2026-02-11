import React, { useState, useEffect } from "react";
import Badge from "@mui/material/Badge";
import { Link } from "react-router-dom";
import { FaShoppingCart, FaUser, FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`h-20 sticky top-0 z-[1000] transition-all duration-300 ${scrolled
          ? "bg-white/80 backdrop-blur-2xl shadow-lg border-b border-gray-200/50"
          : "bg-white/60 backdrop-blur-xl border-b border-gray-100/50"
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-full flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary-dark rounded-xl flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg shadow-primary/30">
            <span className="text-white font-bold text-xl">AR</span>
          </div>
          <span className="font-black text-2xl bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
            WARDROBE
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <Link
            to="/"
            className="text-gray-700 font-semibold hover:text-primary transition-colors relative group py-2"
          >
            Home
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link
            to="/category"
            className="text-gray-700 font-semibold hover:text-primary transition-colors relative group py-2"
          >
            Shop
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link
            to="/about"
            className="text-gray-700 font-semibold hover:text-primary transition-colors relative group py-2"
          >
            About
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
          </Link>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-4">
          {!localStorage.getItem("token") ? (
            <>
              <Link
                to="/login"
                className="hidden md:block text-gray-700 font-semibold hover:text-primary transition-colors"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="hidden md:block px-6 py-2.5 bg-gradient-to-r from-primary to-primary-dark text-white font-bold rounded-full hover:scale-105 hover:shadow-xl hover:shadow-primary/40 transition-all duration-300 shadow-lg shadow-primary/30"
              >
                Sign Up
              </Link>
            </>
          ) : (
            <Link
              to="/profile"
              className="hidden md:flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full hover:bg-primary/20 transition-all duration-300 group"
            >
              <FaUser className="text-primary group-hover:scale-110 transition-transform" />
              <span className="text-primary font-semibold">Profile</span>
            </Link>
          )}

          <Link
            to="/cart"
            className="relative p-2.5 hover:bg-primary/10 rounded-full transition-all duration-300 group"
          >
            <Badge badgeContent={0} color="error">
              <FaShoppingCart className="text-gray-700 group-hover:text-primary text-xl transition-colors" />
            </Badge>
          </Link>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 hover:bg-primary/10 rounded-lg transition-all duration-300"
          >
            {mobileMenuOpen ? (
              <FaTimes className="text-2xl text-primary" />
            ) : (
              <FaBars className="text-2xl text-gray-700" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-20 left-0 right-0 bg-white/95 backdrop-blur-2xl border-b border-gray-200/50 shadow-2xl transition-all duration-300 ${mobileMenuOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-4 pointer-events-none"
          }`}
      >
        <div className="flex flex-col p-6 space-y-3">
          <Link
            to="/"
            className="text-gray-700 font-semibold hover:text-primary hover:bg-primary/5 transition-all duration-300 py-3 px-4 rounded-xl"
            onClick={() => setMobileMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/category"
            className="text-gray-700 font-semibold hover:text-primary hover:bg-primary/5 transition-all duration-300 py-3 px-4 rounded-xl"
            onClick={() => setMobileMenuOpen(false)}
          >
            Shop
          </Link>
          <Link
            to="/about"
            className="text-gray-700 font-semibold hover:text-primary hover:bg-primary/5 transition-all duration-300 py-3 px-4 rounded-xl"
            onClick={() => setMobileMenuOpen(false)}
          >
            About
          </Link>
          {!localStorage.getItem("token") ? (
            <>
              <Link
                to="/login"
                className="text-gray-700 font-semibold hover:text-primary hover:bg-primary/5 transition-all duration-300 py-3 px-4 rounded-xl"
                onClick={() => setMobileMenuOpen(false)}
              >
                Login
              </Link>
              <Link
                to="/register"
                className="px-6 py-3 bg-gradient-to-r from-primary to-primary-dark text-white font-bold rounded-full text-center shadow-lg shadow-primary/30 hover:scale-105 transition-all duration-300"
                onClick={() => setMobileMenuOpen(false)}
              >
                Sign Up
              </Link>
            </>
          ) : (
            <Link
              to="/profile"
              className="text-gray-700 font-semibold hover:text-primary hover:bg-primary/5 transition-all duration-300 py-3 px-4 rounded-xl flex items-center gap-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              <FaUser className="text-primary" />
              Profile
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
