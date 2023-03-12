import React from "react";
import "./Style/footer.scss";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-links">
          <h3>Shop</h3>
          <ul>
            <li>
              <a href="#">Men's</a>
            </li>
            <li>
              <a href="#">Women's</a>
            </li>
            <li>
              <a href="#">Kids</a>
            </li>
          </ul>
        </div>
        <div className="footer-links">
          <h3>About Us</h3>
          <ul>
            <li>
              <a href="#">Our Story</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
          </ul>
        </div>
        <div className="footer-links">
          <h3>Support</h3>
          <ul>
            <li>
              <a href="#">FAQs</a>
            </li>
            <li>
              <a href="#">Shipping</a>
            </li>
            <li>
              <a href="#">Returns</a>
            </li>
          </ul>
        </div>
        <div className="footer-links">
          <h3>Follow Us</h3>
          <ul className="social-links">
            <li>
              <a href="#">
                <i className="fab fa-facebook-f"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fab fa-twitter"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fab fa-instagram"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2023, Ecommerce Site. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
