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
    setCurrentIndex((prev) =>
      prev < products.length - 1 ? prev + 1 : 0
    );
  };

  const previousSlide = () => {
    setCurrentIndex((prev) =>
      prev > 0 ? prev - 1 : products.length - 1
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


        {/* PRODUCTS */}

        <div className="products-window">

          <div
            className="products-track"
            style={{
              transform: `translateX(-${currentIndex * 280}px)`,
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