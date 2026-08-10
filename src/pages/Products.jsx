import React from "react";
import "./Products.css";

import brakePad from "../assets/brake pad.jpeg";
import dieselFilter from "../assets/diesel-filter truck.jpeg";
import oilFilter from "../assets/oil-filter.jpeg";
import accessories from "../assets/accessories.jpeg";

function Products() {
  const products = [
    {
      name: "Brake Pad",
      price: "₹2,500",
      image: brakePad,
    },
    {
      name: "Diesel Filter",
      price: "₹950",
      image: dieselFilter,
    },
    {
      name: "Oil Filter",
      price: "₹750",
      image: oilFilter,
    },
    {
      name: "Truck Accessories",
      price: "₹1,200",
      image: accessories,
    },
  ];

  return (
    <section className="products-section">
      <h2 className="section-title">Featured Truck Parts</h2>

      <div className="products-container">
        {products.map((product, index) => (
          <div className="product-card" key={index}>
            <img
              src={product.image}
              alt={product.name}
              className="product-image"
            />

            <div className="product-info">
              <h3>{product.name}</h3>
              <p>{product.price}</p>

              <button className="product-btn">
                Enquiry
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Products;