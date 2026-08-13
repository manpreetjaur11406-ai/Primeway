import { useEffect, useState } from "react";
import "./FeaturedProducts.css";

import airFilter from "../../assets/ee.png";
import oilFilter from "../../assets/oil filter.png";
import brakePad from "../../assets/brake pads.png";
import dieselFilter from "../../assets/diesel filter image.png";
import truckEngine from "../../assets/truckk engine.jpeg";
import petrolFilter from "../../assets/petrol filter.png";

function FeaturedProducts() {
  const products = [
    {
      name: "Truck Air Filter",
      image: airFilter,
    },
    {
      name: "Heavy Duty Oil Filter",
      image: oilFilter,
    },
    {
      name: "Truck Brake Pads",
      image: brakePad,
    },
    {
      name: "Diesel Fuel Filter",
      image: dieselFilter,
    },
    {
      name: "Truck Engine Parts",
      image: truckEngine,
    },
    {
      name: "Petrol Filter",
      image: petrolFilter,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  /* =========================
     RESPONSIVE SCREEN WIDTH
  ========================= */

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  /* =========================
     SLIDE WIDTH
  ========================= */

  const getSlideWidth = () => {
    // Mobile
    if (windowWidth <= 600) {
      // Card width = viewport - 110px
      // Gap = 15px
      return windowWidth - 95;
    }

    // Tablet
    if (windowWidth <= 900) {
      // Card width = 230px
      // Gap = 25px
      return 255;
    }

    // Laptop / Desktop
    // Card width = 255px
    // Gap = 25px
    return 280;
  };

  const slideWidth = getSlideWidth();

  /* =========================
     NEXT SLIDE
  ========================= */

  const nextSlide = () => {
    setCurrentIndex((prev) => {
      if (prev < products.length - 1) {
        return prev + 1;
      }

      return 0;
    });
  };

  /* =========================
     PREVIOUS SLIDE
  ========================= */

  const previousSlide = () => {
    setCurrentIndex((prev) => {
      if (prev > 0) {
        return prev - 1;
      }

      return products.length - 1;
    });
  };

  return (
    <section className="featured-products">

      {/* =========================
          HEADING
      ========================= */}

      <div className="featured-heading">

        <span className="section-small-title">
          OUR PRODUCTS
        </span>

        <h2>
          Featured Products
        </h2>

        <p>
          Quality truck spare parts for reliable performance
        </p>

      </div>


      {/* =========================
          CAROUSEL
      ========================= */}

      <div className="products-carousel">

        {/* LEFT ARROW */}

        <button
          className="carousel-button"
          onClick={previousSlide}
          aria-label="Previous products"
        >
          &#10094;
        </button>


        {/* PRODUCTS WINDOW */}

        <div className="products-window">

          <div
            className="products-track"
            style={{
              transform: `translateX(-${currentIndex * slideWidth}px)`,
            }}
          >

            {products.map((product, index) => (

              <div
                className="product-card"
                key={index}
              >

                {/* IMAGE */}

                <div className="product-image">

                  <img
                    src={product.image}
                    alt={product.name}
                  />

                </div>


                {/* PRODUCT INFORMATION */}

                <div className="product-info">

                  <h3>
                    {product.name}
                  </h3>

                  <button className="enquiry-btn">
                    Enquiry
                  </button>

                </div>

              </div>

            ))}

          </div>

        </div>


        {/* RIGHT ARROW */}

        <button
          className="carousel-button"
          onClick={nextSlide}
          aria-label="Next products"
        >
          &#10095;
        </button>

      </div>


      {/* =========================
          VIEW ALL
      ========================= */}

      <button className="view-all-btn">
        View All Products
      </button>

    </section>
  );
}

export default FeaturedProducts;