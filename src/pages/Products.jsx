import { useState } from "react";
import "./Products.css";

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

function Products() {
  const [activeCategory, setActiveCategory] = useState("All Products");
  const [selectedProduct, setSelectedProduct] = useState(null);

  const products = [
    {
      name: "Brake Pad",
      price: "₹2,500",
      image: brakePad,
      category: "Brake Parts",
    },
    {
      name: "Diesel Filter",
      price: "₹950",
      image: dieselFilter,
      category: "Filters",
    },
    {
      name: "Oil Filter",
      price: "₹750",
      image: oilFilter,
      category: "Filters",
    },
    {
      name: "Truck Accessories",
      price: "₹1,200",
      image: accessories,
      category: "Truck Accessories",
    },
    {
      name: "Fuel Pump",
      price: "₹4,500",
      image: FuelPump,
      category: "Engine Parts",
    },
    {
      name: "Wheel Hub",
      price: "₹6,500",
      image: Hub,
      category: "Truck Accessories",
    },
    {
      name: "Water Pump",
      price: "₹3,500",
      image: WaterPump,
      category: "Engine Parts",
    },
    {
      name: "Radiator",
      price: "₹12,500",
      image: Radiator,
      category: "Engine Parts",
    },
    {
      name: "Turbocharger",
      price: "₹18,500",
      image: TurboCharger,
      category: "Engine Parts",
    },
    {
      name: "Truck Air Filter",
      price: "₹1,100",
      image: airFilter,
      category: "Filters",
    },
    {
      name: "Petrol Filter",
      price: "₹850",
      image: petrolFilter,
      category: "Filters",
    },
    {
      name: "Truck Engine",
      price: "₹85,000",
      image: truckEngine,
      category: "Engine Parts",
    },
    {
      name: "Truck Alternator",
      price: "₹8,500",
      image: alternator,
      category: "Engine Parts",
    },
    {
      name: "Air Spring",
      price: "₹5,500",
      image: AirSpring,
      category: "Truck Accessories",
    },
    {
      name: "Brake Disc",
      price: "₹4,800",
      image: brakeDisc,
      category: "Brake Parts",
    },
  ];

  const categories = [
    "All Products",
    "Engine Parts",
    "Filters",
    "Brake Parts",
    "Truck Accessories",
  ];

  const filteredProducts =
    activeCategory === "All Products"
      ? products
      : products.filter(
          (product) => product.category === activeCategory
        );

  const handleSubmit = (event) => {
    event.preventDefault();

    alert(
      `Thank you! Your enquiry for ${selectedProduct.name} has been sent.`
    );

    setSelectedProduct(null);
  };

  return (
    <section className="products-page">

      {/* =========================================
          PRODUCTS HEADER
      ========================================= */}

      <div className="products-page-header">

        <span className="products-eyebrow">
          PREMIUM TRUCK PARTS
        </span>

        <h1>Our Products</h1>

        <p>
          Quality truck spare parts built for reliable performance
          and heavy-duty applications.
        </p>

      </div>


      {/* =========================================
          CATEGORY FILTER
      ========================================= */}

      <div className="products-category-filter">

        {categories.map((category) => (
          <button
            key={category}
            type="button"
            className={
              activeCategory === category
                ? "category-filter-btn active"
                : "category-filter-btn"
            }
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}

      </div>


      {/* =========================================
          PRODUCT GRID
      ========================================= */}

      <div className="products-page-container">

        {filteredProducts.map((product) => (
          <div
            className="products-page-card"
            key={product.name}
          >

            {/* PRODUCT IMAGE */}

            <div className="products-page-image">

              <img
                src={product.image}
                alt={product.name}
              />

              <div className="products-image-overlay">
                VIEW PRODUCT
              </div>

            </div>


            {/* PRODUCT INFORMATION */}

            <div className="products-page-info">

              <span className="product-category">
                {product.category}
              </span>

              <h2>{product.name}</h2>

              <div className="product-price">
                {product.price}
              </div>

              <button
                className="products-page-btn"
                type="button"
                onClick={() => setSelectedProduct(product)}
              >
                Enquiry

                <span>→</span>
              </button>

            </div>

          </div>
        ))}

      </div>


      {/* =========================================
          ENQUIRY POPUP
      ========================================= */}

      {selectedProduct && (

        <div
          className="enquiry-modal-overlay"
          onClick={() => setSelectedProduct(null)}
        >

          <div
            className="enquiry-modal"
            onClick={(event) => event.stopPropagation()}
          >

            {/* CLOSE BUTTON */}

            <button
              className="enquiry-close-btn"
              type="button"
              aria-label="Close enquiry form"
              onClick={() => setSelectedProduct(null)}
            >
              ×
            </button>


            {/* POPUP CONTENT */}

            <span className="enquiry-eyebrow">
              PRODUCT ENQUIRY
            </span>

            <h2>
              Enquire about {selectedProduct.name}
            </h2>

            <p>
              Fill in your details and our team will contact you soon.
            </p>


            {/* ENQUIRY FORM */}

            <form onSubmit={handleSubmit}>

              <input
                type="text"
                value={selectedProduct.name}
                readOnly
                className="enquiry-product-input"
              />

              <input
                type="text"
                placeholder="Your full name"
                required
              />

              <input
                type="tel"
                placeholder="Phone number"
                required
              />

              <input
                type="email"
                placeholder="Email address"
                required
              />

              <textarea
                placeholder="Write your requirement..."
                rows="4"
              />

              <button
                className="enquiry-submit-btn"
                type="submit"
              >
                Send Enquiry

                <span>→</span>
              </button>

            </form>

          </div>

        </div>

      )}

    </section>
  );
}

export default Products;