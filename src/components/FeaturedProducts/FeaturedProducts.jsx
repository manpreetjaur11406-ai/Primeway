import { useEffect, useState } from "react";
import "./FeaturedProducts.css";

import airFilter from "../../assets/air-filter truck.jpeg";
import oilFilter from "../../assets/oil-filter.jpeg";
import brakePad from "../../assets/brake pad.jpeg";
import dieselFilter from "../../assets/diesel-filter truck.jpeg";
import truckEngine from "../../assets/truck engine.jpeg";
import petrolFilter from "../../assets/petrol filter.jpeg";


function FeaturedProducts() {

  /* =====================================================
     PRODUCTS
  ===================================================== */

  const products = [
    {
      name: "Air Filter",
      image: airFilter,
    },
    {
      name: " Oil Filter",
      image: oilFilter,
    },
    {
      name: "Brake Pads",
      image: brakePad,
    },
    {
      name: "Diesel Filter",
      image: dieselFilter,
    },
    {
      name: "Truck Engine ",
      image: truckEngine,
    },
    {
      name: "Petrol Filter",
      image: petrolFilter,
    },
  ];


  /* =====================================================
     SCREEN WIDTH
  ===================================================== */

  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined"
      ? window.innerWidth
      : 1200
  );


  /* =====================================================
     CURRENT SLIDE
  ===================================================== */

  const [currentIndex, setCurrentIndex] = useState(0);


  /* =====================================================
     RESPONSIVE SCREEN WIDTH
  ===================================================== */

  useEffect(() => {

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener(
      "resize",
      handleResize
    );

    return () => {
      window.removeEventListener(
        "resize",
        handleResize
      );
    };

  }, []);


  /* =====================================================
     GET NUMBER OF VISIBLE CARDS
  ===================================================== */

  const getVisibleCards = () => {

    /* Mobile = 2 cards */
    if (windowWidth <= 600) {
      return 2;
    }

    /* Tablet */
    if (windowWidth <= 900) {
      return 3;
    }

    /* Desktop */
    return 4;
  };


  /* =====================================================
     VISIBLE CARDS
  ===================================================== */

  const visibleCards = getVisibleCards();


  /* =====================================================
     MAX SLIDE INDEX
  ===================================================== */

  const maxIndex = Math.max(
    products.length - visibleCards,
    0
  );


  /* =====================================================
     SLIDE WIDTH
  ===================================================== */

  const getSlideWidth = () => {

    /* ================================================
       MOBILE

       Card width:
       (viewport - 125px) / 2

       Gap:
       15px

       Card + gap:
       (viewport - 95px) / 2
    ================================================ */

    if (windowWidth <= 600) {

      return (windowWidth - 95) / 2;
    }


    /* ================================================
       TABLET

       Card = 230px
       Gap = 25px
    ================================================ */

    if (windowWidth <= 900) {

      return 255;
    }


    /* ================================================
       DESKTOP

       Card = 255px
       Gap = 25px
    ================================================ */

    return 280;
  };


  const slideWidth = getSlideWidth();


  /* =====================================================
     KEEP INDEX VALID WHEN SCREEN SIZE CHANGES
  ===================================================== */

  useEffect(() => {

    setCurrentIndex((prev) =>
      Math.min(prev, maxIndex)
    );

  }, [maxIndex]);


  /* =====================================================
     NEXT SLIDE
  ===================================================== */

  const nextSlide = () => {

    setCurrentIndex((prev) => {

      if (prev < maxIndex) {
        return prev + 1;
      }

      return 0;
    });
  };


  /* =====================================================
     PREVIOUS SLIDE
  ===================================================== */

  const previousSlide = () => {

    setCurrentIndex((prev) => {

      if (prev > 0) {
        return prev - 1;
      }

      return maxIndex;
    });
  };


  /* =====================================================
     JSX
  ===================================================== */

  return (

    <section className="featured-products">


      {/* =================================================
          HEADING
      ================================================= */}

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


      {/* =================================================
          CAROUSEL
      ================================================= */}

      <div className="products-carousel">


        {/* ===============================================
            LEFT ARROW
        =============================================== */}

        <button
          className="carousel-button"
          onClick={previousSlide}
          aria-label="Previous products"
        >
          &#10094;
        </button>


        {/* ===============================================
            PRODUCTS WINDOW
        =============================================== */}

        <div className="products-window">

          <div
            className="products-track"
            style={{
              transform: `translateX(-${
                currentIndex * slideWidth
              }px)`,
            }}
          >


            {/* ===========================================
                PRODUCTS
            =========================================== */}

            {products.map((product, index) => (

              <div
                className="product-card"
                key={index}
              >


                {/* =======================================
                    PRODUCT IMAGE
                ======================================= */}

                <div className="product-image">

                  <img
                    src={product.image}
                    alt={product.name}
                  />

                </div>


                {/* =======================================
                    PRODUCT INFORMATION
                ======================================= */}

                <div className="product-info">

                  <h3>
                    {product.name}
                  </h3>


                  {/* =====================================
                      ENQUIRY BUTTON
                  ===================================== */}

                  <button
                    className="enquiry-btn"
                  >
                    Enquiry
                  </button>

                </div>

              </div>

            ))}

          </div>

        </div>


        {/* ===============================================
            RIGHT ARROW
        =============================================== */}

        <button
          className="carousel-button"
          onClick={nextSlide}
          aria-label="Next products"
        >
          &#10095;
        </button>

      </div>


      {/* =================================================
          VIEW ALL BUTTON
      ================================================= */}

      <button className="view-all-btn">
        View All Products
      </button>

    </section>
  );
}


export default FeaturedProducts;