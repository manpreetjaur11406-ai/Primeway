import "./FeaturedProducts.css";

import airFilter from "../../assets/air-filter truck.jpeg";
import oilFilter from "../../assets/oil-filter.jpeg";
import brakePad from "../../assets/brake pad.jpeg";
import dieselFilter from "../../assets/diesel-filter truck.jpeg";
import truckEngine from "../../assets/truck engine.jpeg";
import petrolFilter from "../../assets/petrol filter.jpeg";

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

  return (
    <section className="featured-products" id="products">

      <div className="featured-heading">
        <h2>Featured Products</h2>
        <p>Quality Truck Spare Parts</p>
      </div>

      <div className="products-grid">

        {products.map((product, index) => (
          <div className="product-card" key={index}>

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

      <button className="view-all-btn">
        View All Products
      </button>

    </section>
  );
}

export default FeaturedProducts;