import "./Hero.css";
import heroImage from "../assets/truckk engine.jpeg";

function Hero() {
  const handleShopNow = () => {
    const productsSection = document.getElementById("products");

    if (productsSection) {
      productsSection.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      className="hero"
      style={{
        backgroundImage: `url("${heroImage}")`,
      }}
    >
      <div className="hero-content">

        <div className="hero-text">

          <h5>TRUCK SPARE PARTS</h5>

          <h1>
            Premium <span>Filters</span>
            <br />
            &amp; Truck <span>Parts</span>
          </h1>

          <p>
            We provide high-quality diesel filters, petrol filters,
            oil filters, air filters, brake parts, engine parts,
            and accessories for all major truck brands.
          </p>

          <button onClick={handleShopNow}>
            Shop Now
          </button>

        </div>

      </div>
    </section>
  );
}

export default Hero;