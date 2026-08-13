import React from "react";
import "./Footer.css";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* Company */}
        <div className="footer-column">
          <h2>Primeway Truck Parts</h2>

          <p>
            Your trusted partner for premium truck spare parts.
            We provide quality products with reliable service and
            complete customer satisfaction across India.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-column">
          <h3>Quick Links</h3>

          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#products">Products</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-column">
          <h3>Contact Us</h3>

          <p>
            <FaMapMarkerAlt />
            <span>Safidon, Haryana</span>
          </p>

          <p>
            <FaPhoneAlt />
            <span>+91 98765 43210</span>
          </p>

          <p>
            <FaEnvelope />
            <span>info@primeway.com</span>
          </p>
        </div>

        {/* Social Media */}
        <div className="footer-column">
          <h3>Follow Us</h3>

          <div className="social-icons">
            <a href="#" aria-label="Facebook">
              <FaFacebookF />
            </a>

            <a href="#" aria-label="Instagram">
              <FaInstagram />
            </a>

            <a href="#" aria-label="LinkedIn">
              <FaLinkedinIn />
            </a>

            <a href="#" aria-label="WhatsApp">
              <FaWhatsapp />
            </a>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2026 Primeway Truck Parts. All Rights Reserved.</p>
      </div>

    </footer>
  );
}

export default Footer;