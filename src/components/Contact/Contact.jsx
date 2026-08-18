import React, { useState } from "react";
import "./Contact.css";

import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

function Contact() {
  // =========================
  // FORM DATA
  // =========================

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    product: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  // =========================
  // HANDLE INPUT CHANGE
  // =========================

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // =========================
  // SUBMIT ENQUIRY
  // =========================

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setSuccessMessage("");
    setErrorMessage("");

    try {
      const response = await fetch(
        "http://localhost:5000/enquiry",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.message || "Something went wrong."
        );
      }

      // =========================
      // SUCCESS
      // =========================

      setSuccessMessage(
        "Your enquiry has been submitted successfully!"
      );

      // Clear form
      setFormData({
        name: "",
        email: "",
        phone: "",
        product: "",
        message: "",
      });

    } catch (error) {
      console.error("Enquiry error:", error);

      // =========================
      // ERROR
      // =========================

      setErrorMessage(
        "Unable to submit enquiry. Please try again."
      );

    } finally {
      setLoading(false);
    }
  };

  // =========================
  // JSX
  // =========================

  return (
    <section className="contact-section">

      <div className="contact-container">

        {/* =========================
            CONTACT INFORMATION
        ========================= */}

        <div className="contact-info">

          <h2>Contact Us</h2>

          <p>
            We'd love to hear from you. Contact Primeway
            Truck Parts for enquiries, orders, or product
            information.
          </p>


          {/* =========================
              ADDRESS
          ========================= */}

          <div className="info-box">

            <FaMapMarkerAlt className="icon" />

            <div>

              <h4>Address</h4>

              <p>
                California, CA
              </p>

            </div>

          </div>


          {/* =========================
              PHONE
          ========================= */}

          <div className="info-box">

            <FaPhoneAlt className="icon" />

            <div>

              <h4>Phone</h4>

              <p>
                +1 231 251 1111
              </p>

            </div>

          </div>


          {/* =========================
              EMAIL
          ========================= */}

          <div className="info-box">

            <FaEnvelope className="icon" />

            <div>

              <h4>Email</h4>

              <p>
                info@primewaytruckparts.com
              </p>

            </div>

          </div>

        </div>


        {/* =========================
            ENQUIRY FORM
        ========================= */}

        <div className="contact-form">

          <h2>Send an Enquiry</h2>

          <form onSubmit={handleSubmit}>

            {/* =========================
                NAME
            ========================= */}

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />


            {/* =========================
                EMAIL
            ========================= */}

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />


            {/* =========================
                PHONE
            ========================= */}

            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              required
            />


            {/* =========================
                PRODUCT
            ========================= */}

            <input
              type="text"
              name="product"
              placeholder="Product Name"
              value={formData.product}
              onChange={handleChange}
              required
            />


            {/* =========================
                MESSAGE
            ========================= */}

            <textarea
              name="message"
              rows="6"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>


            {/* =========================
                SUCCESS MESSAGE
            ========================= */}

            {successMessage && (
              <p
                style={{
                  color: "#d4af37",
                  marginBottom: "15px",
                  fontWeight: "600",
                }}
              >
                {successMessage}
              </p>
            )}


            {/* =========================
                ERROR MESSAGE
            ========================= */}

            {errorMessage && (
              <p
                style={{
                  color: "#d4af37",
                  marginBottom: "15px",
                  fontWeight: "600",
                }}
              >
                {errorMessage}
              </p>
            )}


            {/* =========================
                SUBMIT BUTTON
            ========================= */}

            <button
              type="submit"
              disabled={loading}
            >
              {loading
                ? "Sending..."
                : "Send Message"}
            </button>

          </form>

        </div>

      </div>

    </section>
  );
}

export default Contact;