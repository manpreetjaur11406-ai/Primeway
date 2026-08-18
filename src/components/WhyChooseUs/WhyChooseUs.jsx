import "./WhyChooseUs.css";

import {
  FaTruck,
  FaHeadset,
  FaShieldAlt,
  FaCreditCard,
} from "react-icons/fa";

function WhyChooseUs() {
  return (
    <section className="why-choose-us">

      <div className="why-heading">
        <span>WHY PRIME WAY</span>
        <h2>Why Choose Us</h2>
        <div className="why-heading-line"></div>
      </div>

      <div className="why-features">

        {/* FREE SHIPPING */}
        <div className="why-feature">
          <div className="why-feature-icon">
            <FaTruck />
          </div>

          <div className="why-feature-content">
            <h3>Free Shipping</h3>

            <p>
              Free shipping on orders
              <br />
              over $1500
            </p>
          </div>

          <div className="why-gold-line"></div>
        </div>


        {/* SUPPORT */}
        <div className="why-feature">
          <div className="why-feature-icon">
            <FaHeadset />
          </div>

          <div className="why-feature-content">
            <h3>Support 24/7</h3>

            <p>
              We are here to help you
              <br />
              anytime
            </p>
          </div>

          <div className="why-gold-line"></div>
        </div>


        {/* SECURE PAYMENT */}
        <div className="why-feature">
          <div className="why-feature-icon">
            <FaShieldAlt />
          </div>

          <div className="why-feature-content">
            <h3>Secure Payment</h3>

            <p>
              100% secure and protected
              <br />
              payment
            </p>
          </div>

          <div className="why-gold-line"></div>
        </div>


        {/* EASY PAYMENT */}
        <div className="why-feature">
          <div className="why-feature-icon">
            <FaCreditCard />
          </div>

          <div className="why-feature-content">
            <h3>Easy Payment</h3>

            <p>
              Multiple convenient
              <br />
              payment options
            </p>
          </div>

          <div className="why-gold-line"></div>
        </div>

      </div>

    </section>
  );
}

export default WhyChooseUs;