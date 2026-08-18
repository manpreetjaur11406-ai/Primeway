import "./Hero.css";

import heroImage from "../assets/tttruck.png";

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
      <div className="hero-overlay"></div>

      <div className="hero-content">
        <div className="hero-text">

          <h5>TRUCK SPARE PARTS</h5>

          <h1>
            Premium Filters
            <br />
            &amp; Truck Parts
          </h1>

          <p>
            Quality truck spare parts, engine parts,
            brake parts, and accessories for all major
            truck brands.
          </p>

          <button
            type="button"
            onClick={handleShopNow}
          >
            Shop Now
          </button>

        </div>
      </div>
    </section>
  );
}

export default Hero;