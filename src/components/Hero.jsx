import "./Hero.css";
import heroImage from "../assets/truck engine.jpeg";

function Hero() {
  return (
    <section className="hero">

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

        <button>Shop Now</button>

      </div>

      <div className="hero-image">
        <img src={heroImage} alt="Truck Parts" />
      </div>

    </section>
  );
}

export default Hero;