import React, { useRef } from "react";
import "./Testimonials.css";

function Testimonials() {
  const testimonials = [
    {
      name: "Rajesh Kumar",
      location: "Delhi",
      review:
        "Primeway provided genuine truck spare parts with excellent quality. The delivery was fast and the service was outstanding.",
    },
    {
      name: "Amit Sharma",
      location: "Jaipur",
      review:
        "I always purchase truck filters from Primeway. Their products are reliable and reasonably priced.",
    },
    {
      name: "Gurpreet Singh",
      location: "Ludhiana",
      review:
        "Very professional team! They helped me choose the right spare parts for my truck. Highly recommended.",
    },
  ];

  const carouselRef = useRef(null);

  const scrollLeft = () => {
    carouselRef.current.scrollBy({
      left: -350,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    carouselRef.current.scrollBy({
      left: 350,
      behavior: "smooth",
    });
  };

  return (
    <section className="testimonials">

      <div className="testimonials-heading">
        <div>
          <h2 className="testimonials-title">
            Customer Testimonials
          </h2>

          <p className="testimonials-subtitle">
            What our valued customers say about Primeway Truck Parts
          </p>
        </div>

        <div className="testimonial-buttons">
          <button onClick={scrollLeft}>←</button>
          <button onClick={scrollRight}>→</button>
        </div>
      </div>

      <div
        className="testimonials-container"
        ref={carouselRef}
      >
        {testimonials.map((item, index) => (
          <div className="testimonial-card" key={index}>

            <div className="customer-image">
              {item.name.charAt(0)}
            </div>

            <h3>{item.name}</h3>

            <span>{item.location}</span>

            <div className="stars">★★★★★</div>

            <p>"{item.review}"</p>

          </div>
        ))}
      </div>

    </section>
  );
}

export default Testimonials;