import {
  FaTruck,
  FaHeadset,
  FaShieldAlt,
  FaCreditCard,
} from "react-icons/fa";

import "./ServiceFeatures.css";

function ServiceFeatures() {
  const features = [
    {
      icon: <FaTruck />,
      title: "Free Shipping",
      text: "Free shipping on orders over ₹1500",
    },
    {
      icon: <FaHeadset />,
      title: "Support 24/7",
      text: "We are here to help you anytime",
    },
    {
      icon: <FaShieldAlt />,
      title: "Secure Payment",
      text: "100% secure and protected payment",
    },
    {
      icon: <FaCreditCard />,
      title: "Easy Payment",
      text: "Multiple convenient payment options",
    },
  ];

  return (
    <section className="service-features">
      <div className="service-features-container">
        {features.map((feature, index) => (
          <div className="service-feature" key={index}>
            <div className="service-feature-icon">
              {feature.icon}
            </div>

            <div className="service-feature-content">
              <h3>{feature.title}</h3>
              <p>{feature.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ServiceFeatures;