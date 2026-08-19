import { useState } from "react";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
} from "react-icons/fa";

import "./Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    product: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    setLoading(true);
    setMessage("");

    try {
      const response = await fetch("http://localhost:5000/enquiry", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Unable to submit enquiry.");
      }

      setMessage("Your enquiry has been submitted successfully!");

      setFormData({
        name: "",
        email: "",
        phone: "",
        product: "",
        message: "",
      });
    } catch (error) {
      setMessage("Unable to submit enquiry. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="contact-page">

      <div className="contact-form-section">

        <div className="contact-form-container">

          {/* =================================================
              LEFT SIDE — ONLY BASIC CONTACT INFORMATION
          ================================================= */}

          <div className="contact-info">

            <p className="contact-tag">
              GET IN TOUCH
            </p>

            <h1>
              Contact Us
            </h1>

            <p className="contact-intro">
              Have a question or need a truck spare part?
              Get in touch with our team and we'll be happy to help.
            </p>

            <div className="contact-info-list">

              {/* LOCATION */}
              <div className="contact-info-item">

                <div className="contact-info-icon">
                  <FaMapMarkerAlt />
                </div>

                <div>
                  <h3>Our Location</h3>

                  <p>
                    California, CA
                  </p>
                </div>

              </div>


              {/* PHONE */}
              <div className="contact-info-item">

                <div className="contact-info-icon">
                  <FaPhoneAlt />
                </div>

                <div>
                  <h3>Phone Number</h3>

                  <p>
                    +1 231 251 1111
                  </p>
                </div>

              </div>


              {/* EMAIL */}
              <div className="contact-info-item">

                <div className="contact-info-icon">
                  <FaEnvelope />
                </div>

                <div>
                  <h3>Email Address</h3>

                  <p>
                    info@primewaytruckparts.com
                  </p>
                </div>

              </div>


              {/* WORKING HOURS */}
              <div className="contact-info-item">

                <div className="contact-info-icon">
                  <FaClock />
                </div>

                <div>
                  <h3>Working Hours</h3>

                  <p>
                    Monday - Friday: 9:00 AM - 6:00 PM
                  </p>
                </div>

              </div>

            </div>

          </div>


          {/* =================================================
              RIGHT SIDE — FORM
          ================================================= */}

          <div className="contact-page-form">

            <p className="contact-tag">
              SEND AN ENQUIRY
            </p>

            <h2>
              Send Us a Message
            </h2>

            <p className="form-description">
              Fill in the form below and our team will get back to you.
            </p>


            <form onSubmit={handleSubmit}>

              <div className="contact-form-row">

                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />

              </div>


              <div className="contact-form-row">

                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />

                <input
                  type="text"
                  name="product"
                  placeholder="Product Name"
                  value={formData.product}
                  onChange={handleChange}
                  required
                />

              </div>


              <textarea
                name="message"
                placeholder="Write your message..."
                value={formData.message}
                onChange={handleChange}
                required
              />


              {message && (
                <p className="contact-message">
                  {message}
                </p>
              )}


              <button
                type="submit"
                disabled={loading}
              >
                {loading
                  ? "Sending..."
                  : "Send Enquiry →"}
              </button>

            </form>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Contact;