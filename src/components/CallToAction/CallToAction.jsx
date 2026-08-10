import React from "react";
import "./CallToAction.css";

function CallToAction() {
  return (
    <section className="cta-section">
      <div className="cta-content">
        <h2>Need Genuine Truck Spare Parts?</h2>

        <p>
          Primeway Truck Parts offers premium-quality truck spare parts,
          filters, accessories, and expert support to keep your vehicle
          running smoothly.
        </p>

        <div className="cta-buttons">
          <button className="quote-btn">Get a Quote</button>
          <button className="contact-btn">Contact Us</button>
        </div>
      </div>
    </section>
  );
}

export default CallToAction;