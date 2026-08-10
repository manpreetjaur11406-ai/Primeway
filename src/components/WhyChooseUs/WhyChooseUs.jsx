import "./WhyChooseUs.css";
import {
  FaTruck,
  FaShieldAlt,
  FaHeadset,
  FaTags,
} from "react-icons/fa";

function WhyChooseUs() {
  return (
    <section className="why-choose-us">
      <div className="why-container">
        <h2>Why Choose Us?</h2>

        <p className="subtitle">
          Trusted supplier of premium truck spare parts across India.
        </p>

        <div className="features">
          <div className="feature-card">
            <FaTruck className="icon" />
            <h3>Fast Delivery</h3>
            <p>
              Quick and reliable delivery to your location.
            </p>
          </div>

          <div className="feature-card">
            <FaShieldAlt className="icon" />
            <h3>Genuine Parts</h3>
            <p>
              100% original and quality-tested truck parts.
            </p>
          </div>

          <div className="feature-card">
            <FaTags className="icon" />
            <h3>Best Prices</h3>
            <p>
              Affordable prices with the best value.
            </p>
          </div>

          <div className="feature-card">
            <FaHeadset className="icon" />
            <h3>24/7 Support</h3>
            <p>
              Friendly customer support whenever you need help.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;