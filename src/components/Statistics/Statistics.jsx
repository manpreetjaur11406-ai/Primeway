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

      {/* DARK BACKGROUND */}
      <div className="statistics-background"></div>

      <div className="statistics-overlay">

        {/* SECTION HEADING */}
        <div className="statistics-heading">

          <span className="statistics-small-title">
            OUR ACHIEVEMENTS
          </span>

          <h2 className="statistics-title">
            Trusted By Thousands
          </h2>

          <p className="statistics-subtitle">
            Delivering trusted truck spare parts with quality and commitment.
          </p>

          <div className="statistics-line"></div>

        </div>


        {/* STATISTICS CARDS */}
        <div className="statistics-container">

          {stats.map((item, index) => (
            <div
              className="statistics-card"
              key={index}
            >

              <div className="statistics-number">
                {item.number}
              </div>

              <div className="statistics-card-line"></div>

              <p>
                {item.title}
              </p>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default Statistics;