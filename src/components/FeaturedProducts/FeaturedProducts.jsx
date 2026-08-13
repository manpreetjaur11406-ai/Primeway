import { useState } from "react";
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

  const nextSlide = () => {
    setCurrentIndex((current) =>
      current >= products.length - 3 ? 0 : current + 1
    );
  };

  const previousSlide = () => {
    setCurrentIndex((current) =>
      current === 0 ? products.length - 3 : current - 1
    );
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

        <h2>Featured Products</h2>

        <p>
          Quality truck spare parts for reliable performance
        </p>

      </div>


      {/* =========================
          PRODUCTS
      ========================= */}

      <div className="products-carousel">

        <button
          className="carousel-button"
          onClick={previousSlide}
          aria-label="Previous products"
        >
          &#10094;
        </button>


        <div className="products-window">

          <div
            className="products-track"
            style={{
              transform: `translateX(-${
                currentIndex * (100 / 3)
              }%)`,
            }}
          >

            {products.map((product, index) => (

              <div
                className="product-card"
                key={index}
              >

                <div className="product-image">

                  <img
                    src={product.image}
                    alt={product.name}
                  />

                </div>


                <div className="product-info">

                  <h3>{product.name}</h3>

                  <button className="enquiry-btn">
                    Enquiry
                  </button>

                </div>

              </div>

            ))}

          </div>

        </div>


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