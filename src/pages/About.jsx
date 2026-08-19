import "./About.css";
import truckParts from "../assets/truck-parts.jpeg";

function About() {
  return (
    <main className="about-page">
      <section className="about-hero">
        <h1>About Us</h1>
        <p>
          HOME <span>/</span> ABOUT US
        </p>
      </section>

      <section className="about-intro">
        <img
          src={truckParts}
          alt="Truck spare parts"
          className="about-image"
        />

        <div className="about-text">
          <p className="about-label">PRIMEWAY</p>
          <h2>About Us</h2>

          <p>
            Primeway provides quality truck spare parts and accessories for
            different truck brands. We help truck owners, workshops, and fleet
            operators find reliable parts at fair prices.
          </p>

          <p>
            Our goal is to keep trucks running safely and efficiently with
            dependable products and helpful customer service.
          </p>
        </div>
      </section>

      <section className="about-content">
        <div className="about-block">
          <h2>Our Mission</h2>
          <p>
            To keep trucks moving with quality parts, reliable service, and
            honest pricing.
          </p>
        </div>

        <div className="about-block">
          <h2>Our Vision</h2>
          <p>
            To become a trusted name for truck spare parts by delivering
            quality, value, and excellent customer support.
          </p>
        </div>

        <div className="about-block">
          <h2>Our Values</h2>
          <ol>
            <li><strong>Integrity</strong> – We do business honestly and transparently.</li>
            <li><strong>Reliability</strong> – We provide dependable products and service.</li>
            <li><strong>Customer First</strong> – We listen and offer the right solution.</li>
            <li><strong>Quality</strong> – We focus on durable truck spare parts.</li>
          </ol>
        </div>

        <div className="about-block">
          <h2>Our Team</h2>
          <p>
            Our team is committed to helping customers choose the right parts
            and receive the support they need.
          </p>
        </div>

        <div className="about-block">
          <h2>Future Growth</h2>
          <p>
            As Primeway grows, we will continue expanding our product range
            and improving our service for truck owners and businesses.
          </p>
        </div>
      </section>
    </main>
  );
}

export default About;