import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane } from "react-icons/fa";

function Footer() {
  const [email, setEmail] = useState("");

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log("Newsletter subscription:", email);
    setEmail("");
  };

  return (
    <footer className="relative bg-gradient-to-br from-primary-dark via-black to-gray-900 text-white overflow-hidden">
      {/* Decorative floating elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-primary-light/5 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
        {/* Newsletter Section */}
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 mb-16">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-3xl md:text-4xl font-black mb-4 bg-gradient-to-r from-primary-light to-white bg-clip-text text-transparent">
              Stay Updated
            </h3>
            <p className="text-gray-300 mb-8">
              Subscribe to our newsletter for exclusive deals, AR fashion tips, and new arrivals!
            </p>
            <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-light transition-all"
                required
              />
              <button
                type="submit"
                className="px-8 py-4 bg-gradient-to-r from-primary to-primary-light text-white font-bold rounded-full hover:scale-105 hover:shadow-xl hover:shadow-primary/40 transition-all duration-300 shadow-lg shadow-primary/30 flex items-center justify-center gap-2"
              >
                <FaPaperPlane />
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary-dark rounded-xl flex items-center justify-center shadow-lg shadow-primary/30">
                <span className="text-white font-bold text-xl">AR</span>
              </div>
              <span className="font-black text-2xl bg-gradient-to-r from-primary-light to-white bg-clip-text text-transparent">
                WARDROBE
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Experience fashion like never before with our cutting-edge AR technology. Try before you buy!
            </p>
            <div className="flex gap-3">
              <a
                href="https://facebook.com"
                className="w-10 h-10 bg-white/5 hover:bg-primary rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:rotate-12 group"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebookF className="text-sm group-hover:scale-110 transition-transform" />
              </a>
              <a
                href="https://twitter.com"
                className="w-10 h-10 bg-white/5 hover:bg-primary-dark rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:rotate-12 group"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter className="text-sm group-hover:scale-110 transition-transform" />
              </a>
              <a
                href="https://instagram.com"
                className="w-10 h-10 bg-white/5 hover:bg-primary-light rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:rotate-12 group"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="text-sm group-hover:scale-110 transition-transform" />
              </a>
              <a
                href="https://linkedin.com"
                className="w-10 h-10 bg-white/5 hover:bg-primary rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:rotate-12 group"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn className="text-sm group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>

          {/* Shop Links */}
          <div>
            <h3 className="font-bold text-lg mb-6 text-white">Shop</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/category" className="text-gray-400 hover:text-primary-light transition-colors text-sm flex items-center gap-2 group">
                  <span className="w-0 h-0.5 bg-primary-light group-hover:w-4 transition-all duration-300"></span>
                  All Products
                </Link>
              </li>
              <li>
                <Link to="/category" className="text-gray-400 hover:text-primary-light transition-colors text-sm flex items-center gap-2 group">
                  <span className="w-0 h-0.5 bg-primary-light group-hover:w-4 transition-all duration-300"></span>
                  Eyewear
                </Link>
              </li>
              <li>
                <Link to="/category" className="text-gray-400 hover:text-primary-light transition-colors text-sm flex items-center gap-2 group">
                  <span className="w-0 h-0.5 bg-primary-light group-hover:w-4 transition-all duration-300"></span>
                  Accessories
                </Link>
              </li>
              <li>
                <Link to="/category" className="text-gray-400 hover:text-primary-light transition-colors text-sm flex items-center gap-2 group">
                  <span className="w-0 h-0.5 bg-primary-light group-hover:w-4 transition-all duration-300"></span>
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
                <Link to="/about" className="text-gray-400 hover:text-primary-light transition-colors text-sm flex items-center gap-2 group">
                  <span className="w-0 h-0.5 bg-primary-light group-hover:w-4 transition-all duration-300"></span>
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-primary-light transition-colors text-sm flex items-center gap-2 group">
                  <span className="w-0 h-0.5 bg-primary-light group-hover:w-4 transition-all duration-300"></span>
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-gray-400 hover:text-primary-light transition-colors text-sm flex items-center gap-2 group">
                  <span className="w-0 h-0.5 bg-primary-light group-hover:w-4 transition-all duration-300"></span>
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-400 hover:text-primary-light transition-colors text-sm flex items-center gap-2 group">
                  <span className="w-0 h-0.5 bg-primary-light group-hover:w-4 transition-all duration-300"></span>
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-lg mb-6 text-white">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-400 text-sm group hover:text-primary-light transition-colors">
                <FaMapMarkerAlt className="text-primary-light mt-1 flex-shrink-0 group-hover:scale-110 transition-transform" />
                <span>123 Fashion Street, Style City, SC 12345</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400 text-sm group hover:text-primary-light transition-colors">
                <FaPhone className="text-primary-light flex-shrink-0 group-hover:scale-110 transition-transform" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400 text-sm group hover:text-primary-light transition-colors">
                <FaEnvelope className="text-primary-light flex-shrink-0 group-hover:scale-110 transition-transform" />
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
            <Link to="/privacy" className="text-gray-500 hover:text-primary-light transition-colors">
              Privacy
            </Link>
            <Link to="/terms" className="text-gray-500 hover:text-primary-light transition-colors">
              Terms
            </Link>
            <Link to="/cookies" className="text-gray-500 hover:text-primary-light transition-colors">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
