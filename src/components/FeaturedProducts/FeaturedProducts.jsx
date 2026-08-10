import "./FeaturedProducts.css";

import diesel from "../../assets/diesel-filter truck.jpeg";
import petrol from "../../assets/petrol filter.jpeg";
import air from "../../assets/air-filter truck.jpeg";
import oil from "../../assets/oil-filter.jpeg";

import { FaShoppingCart } from "react-icons/fa";

function FeaturedProducts() {
  const products = [
    {
      image: diesel,
      name: "Diesel Filter",
      price: "₹899",
    },
    {
      image: petrol,
      name: "Petrol Filter",
      price: "₹799",
    },
    {
      image: air,
      name: "Air Filter",
      price: "₹999",
    },
    {
      image: oil,
      name: "Oil Filter",
      price: "₹699",
    },
  ];

  return (
    <section className="featured-products">
      <h2>Featured Products</h2>
      <p>Best Selling Truck Spare Parts</p>

      <div className="products-grid">
        {products.map((product, index) => (
          <div className="product-card" key={index}>

            <img src={product.image} alt={product.name} />

            <h3>{product.name}</h3>

            <p className="price">{product.price}</p>

            <div className="product-buttons">
              <button>
                <FaShoppingCart /> Enquiry
              </button>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
}

export default FeaturedProducts;