import React from "react";
import "./Contact.css";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

function Contact() {
  return (
    <section className="contact-section">
      <div className="contact-container">

        <div className="contact-info">
          <h2>Contact Us</h2>

          <p>
            We'd love to hear from you. Contact Primeway Truck Parts for
            enquiries, orders, or product information.
          </p>

          <div className="info-box">
            <FaMapMarkerAlt className="icon" />
            <div>
              <h4>Address</h4>
              <p>123 Industrial Area, Ludhiana, Punjab, India</p>
            </div>
          </div>

          <div className="info-box">
            <FaPhoneAlt className="icon" />
            <div>
              <h4>Phone</h4>
              <p>+91 98765 43210</p>
            </div>
          </div>

          <div className="info-box">
            <FaEnvelope className="icon" />
            <div>
              <h4>Email</h4>
              <p>info@primewaytruckparts.com</p>
            </div>
          </div>
        </div>

        <div className="contact-form">
          <h2>Send an Enquiry</h2>

          <form>
            <input
              type="text"
              placeholder="Your Name"
            />

            <input
              type="email"
              placeholder="Your Email"
            />

            <input
              type="tel"
              placeholder="Phone Number"
            />

            <textarea
              rows="6"
              placeholder="Your Message"
            ></textarea>

            <button type="submit">
              Send Message
            </button>
          </form>
        </div>

      </div>
    </section>
  );
}

export default Contact;