import React from "react";
import "./Products.css";

// ===============================
// PRODUCT IMAGES
// ===============================

import brakePad from "../assets/brake pad.jpeg";
import dieselFilter from "../assets/diesel filter.jpeg";
import oilFilter from "../assets/oil-filter.jpeg";
import accessories from "../assets/accessories.jpeg";
import FuelPump from "../assets/fuel pump.jpeg";
import Hub from "../assets/hub.jpeg";
import WaterPump from "../assets/pump.jpeg";
import Radiator from "../assets/radiator.jpeg";
import TurboCharger from "../assets/trbo.jpeg";
import airFilter from "../assets/air-filter truck.jpeg";
import petrolFilter from "../assets/petrol filter.jpeg";
import truckEngine from "../assets/truck engine.jpeg";
import alternator from "../assets/alter.jpeg";
import AirSpring from "../assets/air spring.jpeg";
import brakeDisc from "../assets/brake disc.jpeg";


// ===============================
// PRODUCTS COMPONENT
// ===============================

function Products() {

  // ===============================
  // ALL PRODUCTS
  // ===============================

  const products = [

    // 1. BRAKE PAD
    {
      name: "Brake Pad",
      price: "₹2,500",
      image: brakePad,
    },

    // 2. DIESEL FILTER
    {
      name: "Diesel Filter",
      price: "₹950",
      image: dieselFilter,
    },

    // 3. OIL FILTER
    {
      name: "Oil Filter",
      price: "₹750",
      image: oilFilter,
    },

    // 4. TRUCK ACCESSORIES
    {
      name: "Truck Accessories",
      price: "₹1,200",
      image: accessories,
    },

    // 5. FUEL PUMP
    {
      name: "Fuel Pump",
      price: "₹4,500",
      image: FuelPump,
    },

    // 6. WHEEL HUB
    {
      name: "Wheel Hub",
      price: "₹6,500",
      image: Hub,
    },

    // 7. WATER PUMP
    {
      name: "Water Pump",
      price: "₹3,500",
      image: WaterPump,
    },

    // 8. RADIATOR
    {
      name: "Radiator",
      price: "₹12,500",
      image: Radiator,
    },

    // 9. TURBOCHARGER
    {
      name: "Turbocharger",
      price: "₹18,500",
      image: TurboCharger,
    },

    // 10. AIR FILTER
    {
      name: "Truck Air Filter",
      price: "₹1,100",
      image: airFilter,
    },

    // 11. PETROL FILTER
    {
      name: "Petrol Filter",
      price: "₹850",
      image: petrolFilter,
    },

    // 12. TRUCK ENGINE
    {
      name: "Truck Engine",
      price: "₹85,000",
      image: truckEngine,
    },

    // 13. ALTERNATOR
    {
      name: "Truck Alternator",
      price: "₹8,500",
      image: alternator,
    },

    // 14. AIR SPRING
    {
      name: "Air Spring",
      price: "₹5,500",
      image: AirSpring,
    },

    // 15. BRAKE DISC
    {
      name: "Brake Disc",
      price: "₹4,800",
      image: brakeDisc,
    },

    // ==========================================
    // ADD NEW PRODUCTS BELOW THIS LINE
    // ==========================================

    /*
    {
      name: "New Product Name",
      price: "₹0",
      image: newProductImage,
    },
    */

  ];


  // ===============================
  // PAGE
  // ===============================

  return (
    <section className="products-page">

      {/* =========================
          PAGE HEADER
      ========================= */}

      <div className="products-page-header">

        <span className="products-eyebrow">
          PREMIUM TRUCK PARTS
        </span>

        <h1>
          Our Products
        </h1>

        <p>
          Quality truck spare parts built for reliable performance
          and heavy-duty applications.
        </p>

      </div>


      {/* =========================
          PRODUCTS GRID
      ========================= */}

      <div className="products-page-container">

        {products.map((product, index) => (

          <div
            className="products-page-card"
            key={index}
          >

            {/* =========================
                PRODUCT IMAGE
            ========================= */}

            <div className="products-page-image">

              <img
                src={product.image}
                alt={product.name}
              />

              <div className="products-image-overlay">
                VIEW PRODUCT
              </div>

            </div>


            {/* =========================
                PRODUCT INFORMATION
            ========================= */}

            <div className="products-page-info">

              <span className="product-category">
                TRUCK SPARE PART
              </span>

              <h2>
                {product.name}
              </h2>

              <div className="product-price">
                {product.price}
              </div>


              {/* =========================
                  ENQUIRY BUTTON
              ========================= */}

              <button
                className="products-page-btn"
                type="button"
              >
                Enquiry

                <span>
                  →
                </span>

              </button>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Products;