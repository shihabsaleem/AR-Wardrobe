import React from "react";
import "./Style/footer.scss";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-links">
          <h3>Shop</h3>
          <ul>
            <li>
              <a href="/shop/mens">Men's</a>
            </li>
            <li>
              <a href="/shop/womens">Women's</a>
            </li>
            <li>
              <a href="/shop/kids">Kids</a>
            </li>
          </ul>
        </div>
        <div className="footer-links">
          <h3>About Us</h3>
          <ul>
            <li>
              <a href="/about/our-story">Our Story</a>
            </li>
            <li>
              <a href="/about/blog">Blog</a>
            </li>
            <li>
              <a href="/about/contact">Contact Us</a>
            </li>
          </ul>
        </div>
        <div className="footer-links">
          <h3>Support</h3>
          <ul>
            <li>
              <a href="/support/faqs">FAQs</a>
            </li>
            <li>
              <a href="/support/shipping">Shipping</a>
            </li>
            <li>
              <a href="/support/returns">Returns</a>
            </li>
          </ul>
        </div>
        <div className="footer-links">
          <h3>Follow Us</h3>
          <ul className="social-links">
            <li>
              <a href="https://www.facebook.com">
                <FaFacebookF />
              </a>
            </li>
            <li>
              <a href="https://www.twitter.com">
                <FaTwitter />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com">
                <FaInstagram />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2023, AR Wardrobe. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
