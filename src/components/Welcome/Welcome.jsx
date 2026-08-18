import "./Welcome.css";

import welcomeImage from "../../assets/usa.png";

function Welcome() {

  const handleExploreProducts = () => {

    const productsSection =
      document.getElementById("products");

    if (productsSection) {

      productsSection.scrollIntoView({
        behavior: "smooth",
      });

    }
  };


  return (
    <section className="welcome-section">

      <div className="welcome-container">

        {/* =====================================================
            LEFT IMAGE
        ===================================================== */}

        <div className="welcome-image">

          <img
            src={welcomeImage}
            alt="PrimeWay truck parts"
          />

        </div>


        {/* =====================================================
            RIGHT CONTENT
        ===================================================== */}

        <div className="welcome-content">

          <h2 className="welcome-title">
            Welcome to PrimeWay – Your Trusted Truck Parts Partner
          </h2>


          <p>
            At PrimeWay Traders LLC, we specialize in supplying
            high-quality, reliable, and durable truck spare parts
            that keep your fleet moving. With a commitment to
            quality and customer satisfaction, we provide dependable
            parts for trucks and commercial vehicles.
          </p>


          <p>
            From engine parts and filters to brake components and
            essential truck accessories, our products are selected
            to deliver reliable performance and long-lasting value.
          </p>


          <p>
            Our goal is simple — to provide quality truck parts
            at competitive prices while making your buying
            experience easy, convenient, and trustworthy.
          </p>


          <button
            type="button"
            className="welcome-button"
            onClick={handleExploreProducts}
          >
            Explore Our Products
          </button>

        </div>

      </div>

    </section>
  );
}


export default Welcome;