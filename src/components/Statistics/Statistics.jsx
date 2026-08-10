import React from "react";
import "./Statistics.css";

function Statistics() {
  const stats = [
    {
      number: "10+",
      title: "Years of Experience",
    },
    {
      number: "5000+",
      title: "Happy Customers",
    },
    {
      number: "2500+",
      title: "Products Available",
    },
    {
      number: "50+",
      title: "Trusted Brands",
    },
  ];

  return (
    <section className="statistics-section">
      <div className="statistics-overlay">
        <h2 className="statistics-title">Our Achievements</h2>
        <p className="statistics-subtitle">
          Delivering trusted truck spare parts with quality and commitment.
        </p>

        <div className="statistics-container">
          {stats.map((item, index) => (
            <div className="statistics-card" key={index}>
              <h3>{item.number}</h3>
              <p>{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Statistics;