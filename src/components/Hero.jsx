 import "./Hero.css";
import heroImage from "../assets/truck engine.jpeg";
import { useNavigate } from "react-router-dom";

function Hero() {
  const navigate = useNavigate();

  return (
    <section
      className="hero"
      style={{ backgroundImage: `url("${heroImage}")` }}
    >
      <div className="hero-overlay"></div>

      <div className="hero-content">
        <div className="hero-text">
          <h5>TRUCK SPARE PARTS</h5>

          <h1>
            Premium Filters
            <br />
            & Truck Parts
          </h1>

          <p>
            We provide high-quality diesel filters, petrol filters,
            oil filters, air filters, brake parts, engine parts,
            and accessories for all major truck brands.
          </p>

          <button onClick={() => navigate("/products")}>
            Shop Now
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;