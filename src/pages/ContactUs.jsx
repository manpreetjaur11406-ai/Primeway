import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

import "./ContactUs.css";

function ContactUs() {
  return (
    <main className="contact-us-page">

      {/* =====================================================
          CONTACT PAGE BANNER
      ===================================================== */}

      <section className="contact-us-banner">

        <div className="contact-us-banner-content">

          <h1>Contact Us</h1>

          <div className="contact-us-breadcrumb">

            <span>HOME</span>

            <span className="breadcrumb-slash">/</span>

            <span className="active">CONTACT US</span>

          </div>

        </div>

      </section>


      {/* =====================================================
          CONTACT INFORMATION SECTION
      ===================================================== */}

      <section className="contact-us-information">

        <div className="contact-us-container">


          {/* =================================================
              COLUMN 1 — FIND US
          ================================================= */}

          <div className="contact-us-intro">

            <p className="contact-us-small-title">
              GET IN TOUCH
            </p>

            <h2>
              Find Us <span>PrimeWay.</span>
            </h2>

            <p className="contact-us-description">
              Looking for reliable truck spare parts?
              Our team is ready to help you find the right
              parts for your truck and keep your business moving.
            </p>

          </div>


          {/* =================================================
              COLUMN 2 — OUR LOCATION
          ================================================= */}

          <div className="contact-us-column">

            <h3>OUR LOCATION</h3>

            <div className="contact-us-detail">

              <div className="contact-us-icon">
                <FaMapMarkerAlt />
              </div>

              <div>
                <h4>Address</h4>
                <p>California, CA</p>
              </div>

            </div>


            <div className="contact-us-detail">

              <div className="contact-us-icon">
                <FaClock />
              </div>

              <div>
                <h4>Working Hours</h4>
                <p>Monday - Friday</p>
                <p>9:00 AM - 6:00 PM</p>
              </div>

            </div>

          </div>


          {/* =================================================
              COLUMN 3 — MORE INFORMATION
          ================================================= */}

          <div className="contact-us-column">

            <h3>MORE INFORMATION</h3>

            <div className="contact-us-detail">

              <div className="contact-us-icon">
                <FaPhoneAlt />
              </div>

              <div>
                <h4>Phone</h4>
                <p>+1 231 251 1111</p>
              </div>

            </div>


            <div className="contact-us-detail">

              <div className="contact-us-icon">
                <FaEnvelope />
              </div>

              <div>
                <h4>Email</h4>
                <p>info@primewaytruckparts.com</p>
              </div>

            </div>

          </div>


          {/* =================================================
              COLUMN 4 — CONNECT
          ================================================= */}

          <div className="contact-us-column contact-us-connect">

            <h3>CONNECT WITH US</h3>

            <p>
              Follow PrimeWay for updates, products and
              truck spare parts information.
            </p>


            <div className="contact-social-icons">

              <a href="#" aria-label="Facebook">
                <FaFacebookF />
              </a>

              <a href="#" aria-label="Instagram">
                <FaInstagram />
              </a>

              <a href="#" aria-label="LinkedIn">
                <FaLinkedinIn />
              </a>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          CONTACT FORM SECTION
      ===================================================== */}

      <section className="contact-us-form-section">

        <div className="contact-us-form-container">


          {/* LEFT TEXT */}

          <div className="contact-us-form-text">

            <p className="contact-us-small-title">
              SEND AN ENQUIRY
            </p>

            <h2>
              Let's Talk About
              <span> Your Truck Parts.</span>
            </h2>

            <p>
              Have a question about a product, availability or
              truck spare part? Send us a message and our team
              will get back to you.
            </p>

          </div>


          {/* FORM */}

          <form className="contact-us-page-form">

            <div className="contact-us-form-row">

              <input
                type="text"
                placeholder="Your Name"
                required
              />

              <input
                type="email"
                placeholder="Your Email"
                required
              />

            </div>


            <div className="contact-us-form-row">

              <input
                type="tel"
                placeholder="Phone Number"
                required
              />

              <input
                type="text"
                placeholder="Product Name"
                required
              />

            </div>


            <textarea
              placeholder="Write your message..."
              required
            ></textarea>


            <button type="submit">
              Send Enquiry →
            </button>

          </form>

        </div>

      </section>

    </main>
  );
}

export default ContactUs;