import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-xl">AR</span>
              </div>
              <span className="font-black text-2xl text-primary-light">
                WARDROBE
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Experience fashion like never before with our cutting-edge AR technology. Try before you buy!
            </p>
            <div className="flex gap-3">
              <a href="https://facebook.com" className="w-10 h-10 bg-white/5 hover:bg-primary rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110">
                <FaFacebookF className="text-sm" />
              </a>
              <a href="https://twitter.com" className="w-10 h-10 bg-white/5 hover:bg-gradient-to-br hover:from-purple-600 hover:to-pink-600 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110">
                <FaTwitter className="text-sm" />
              </a>
              <a href="https://instagram.com" className="w-10 h-10 bg-white/5 hover:bg-gradient-to-br hover:from-purple-600 hover:to-pink-600 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110">
                <FaInstagram className="text-sm" />
              </a>
              <a href="https://linkedin.com" className="w-10 h-10 bg-white/5 hover:bg-gradient-to-br hover:from-purple-600 hover:to-pink-600 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110">
                <FaLinkedinIn className="text-sm" />
              </a>
            </div>
          </div>

          {/* Shop Links */}
          <div>
            <h3 className="font-bold text-lg mb-6 text-white">Shop</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/category" className="text-gray-400 hover:text-purple-400 transition-colors text-sm flex items-center gap-2 group">
                  <span className="w-0 h-0.5 bg-purple-400 group-hover:w-4 transition-all duration-300"></span>
                  All Products
                </Link>
              </li>
              <li>
                <Link to="/category" className="text-gray-400 hover:text-purple-400 transition-colors text-sm flex items-center gap-2 group">
                  <span className="w-0 h-0.5 bg-purple-400 group-hover:w-4 transition-all duration-300"></span>
                  Eyewear
                </Link>
              </li>
              <li>
                <Link to="/category" className="text-gray-400 hover:text-purple-400 transition-colors text-sm flex items-center gap-2 group">
                  <span className="w-0 h-0.5 bg-primary group-hover:w-4 transition-all duration-300"></span>
                  Accessories
                </Link>
              </li>
              <li>
                <Link to="/category" className="text-gray-400 hover:text-purple-400 transition-colors text-sm flex items-center gap-2 group">
                  <span className="w-0 h-0.5 bg-purple-400 group-hover:w-4 transition-all duration-300"></span>
                  New Arrivals
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-bold text-lg mb-6 text-white">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-gray-400 hover:text-purple-400 transition-colors text-sm flex items-center gap-2 group">
                  <span className="w-0 h-0.5 bg-purple-400 group-hover:w-4 transition-all duration-300"></span>
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-purple-400 transition-colors text-sm flex items-center gap-2 group">
                  <span className="w-0 h-0.5 bg-purple-400 group-hover:w-4 transition-all duration-300"></span>
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-gray-400 hover:text-purple-400 transition-colors text-sm flex items-center gap-2 group">
                  <span className="w-0 h-0.5 bg-purple-400 group-hover:w-4 transition-all duration-300"></span>
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-400 hover:text-purple-400 transition-colors text-sm flex items-center gap-2 group">
                  <span className="w-0 h-0.5 bg-purple-400 group-hover:w-4 transition-all duration-300"></span>
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-lg mb-6 text-white">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-400 text-sm">
                <FaMapMarkerAlt className="text-purple-400 mt-1 flex-shrink-0" />
                <span>123 Fashion Street, Style City, SC 12345</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400 text-sm">
                <FaPhone className="text-purple-400 flex-shrink-0" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400 text-sm">
                <FaEnvelope className="text-purple-400 flex-shrink-0" />
                <span>hello@arwardrobe.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} AR Wardrobe. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <Link to="/privacy" className="text-gray-500 hover:text-purple-400 transition-colors">
              Privacy
            </Link>
            <Link to="/terms" className="text-gray-500 hover:text-purple-400 transition-colors">
              Terms
            </Link>
            <Link to="/cookies" className="text-gray-500 hover:text-purple-400 transition-colors">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
