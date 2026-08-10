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

        <div className="footer-column">
          <h2>Primeway Truck Parts</h2>

          <p>
            Your trusted partner for premium truck spare parts.
            We provide quality products with reliable service and
            complete customer satisfaction across India.
          </p>
        </div>

        <div className="footer-column">
          <h3>Quick Links</h3>

          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Products</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>Contact Us</h3>

          <p><FaMapMarkerAlt /> Safidon, Haryana</p>
          <p><FaPhoneAlt /> +91 98765 43210</p>
          <p><FaEnvelope /> info@primeway.com</p>
        </div>

        <div className="footer-column">
          <h3>Follow Us</h3>

          <div className="social-icons">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaLinkedinIn /></a>
            <a href="#"><FaWhatsapp /></a>
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