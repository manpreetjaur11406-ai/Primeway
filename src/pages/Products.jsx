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
    <section className="products-page">

      {/* PAGE HEADER */}
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


      {/* PRODUCTS GRID */}
      <div className="products-page-container">

        {products.map((product, index) => (
          <div
            className="products-page-card"
            key={index}
          >

            {/* IMAGE */}
            <div className="products-page-image">
              <img
                src={product.image}
                alt={product.name}
              />

              <div className="products-image-overlay">
                VIEW PRODUCT
              </div>
            </div>


            {/* PRODUCT CONTENT */}
            <div className="products-page-info">

              <span className="product-category">
                TRUCK SPARE PART
              </span>

              <h2>{product.name}</h2>

              <div className="product-price">
                {product.price}
              </div>

              <button className="products-page-btn">
                Enquiry
                <span>→</span>
              </button>

            </div>

          </div>
        ))}

      </div>

    </section>
  );
}

export default Products;