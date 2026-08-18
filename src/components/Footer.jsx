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

        {/* =========================
            COMPANY
        ========================= */}

        <div className="footer-column">

          <h2>Primeway Truck Parts</h2>

          <p>
            Your trusted partner for premium truck spare parts.
            We provide quality products with reliable service and
            complete customer satisfaction.
          </p>

        </div>


        {/* =========================
            QUICK LINKS
        ========================= */}

        <div className="footer-column">

          <h3>Quick Links</h3>

          <ul>

            <li>
              <a href="#home">
                Home
              </a>
            </li>

            <li>
              <a href="#about">
                About
              </a>
            </li>

            <li>
              <a href="#products">
                Products
              </a>
            </li>

            <li>
              <a href="#contact">
                Contact
              </a>
            </li>

          </ul>

        </div>


        {/* =========================
            CONTACT
        ========================= */}

        <div className="footer-column">

          <h3>Contact Us</h3>

          {/* Address */}

          <p>
            <FaMapMarkerAlt />

            <span>
              California, CA
            </span>
          </p>


          {/* Phone */}

          <p>
            <FaPhoneAlt />

            <span>
              +1 231 251 1111
            </span>
          </p>


          {/* Email */}

          <p>
            <FaEnvelope />

            <span>
              info@primewaytruckparts.com
            </span>
          </p>

        </div>


        {/* =========================
            SOCIAL MEDIA
        ========================= */}

        <div className="footer-column">

          <h3>Follow Us</h3>

          <div className="social-icons">

            {/* Facebook */}

            <a
              href="YOUR_PRIMEWAY_FACEBOOK_LINK"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <FaFacebookF />
            </a>


            {/* Instagram */}

            <a
              href="YOUR_PRIMEWAY_INSTAGRAM_LINK"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>


            {/* LinkedIn */}

            <a
              href="YOUR_PRIMEWAY_LINKEDIN_LINK"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn />
            </a>


            {/* WhatsApp */}

            <a
              href="YOUR_PRIMEWAY_WHATSAPP_LINK"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
            >
              <FaWhatsapp />
            </a>

          </div>

        </div>

      </div>


      {/* =========================
          FOOTER BOTTOM
      ========================= */}

      <div className="footer-bottom">

        <p>
          © 2026 Primeway Truck Parts. All Rights Reserved.
        </p>

      </div>

    </footer>
  );
}

export default Footer;