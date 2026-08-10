import "./Categories.css";
import { useRef } from "react";

import diesel from "../assets/diesel-filter truck.jpeg";
import petrol from "../assets/petrol filter.jpeg";
import air from "../assets/air-filter truck.jpeg";
import oil from "../assets/oil-filter.jpeg";
import brake from "../assets/brake pad.jpeg";
import accessories from "../assets/accessories.jpeg";

const categories = [
  {
    name: "Diesel Filter",
    image: diesel,
  },
  {
    name: "Petrol Filter",
    image: petrol,
  },
  {
    name: "Air Filter",
    image: air,
  },
  {
    name: "Oil Filter",
    image: oil,
  },
  {
    name: "Brake Pad",
    image: brake,
  },
  {
    name: "Accessories",
    image: accessories,
  },
];

function Categories() {
  const carouselRef = useRef(null);

  const scrollLeft = () => {
    carouselRef.current.scrollBy({
      left: -320,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    carouselRef.current.scrollBy({
      left: 320,
      behavior: "smooth",
    });
  };

  return (
    <section className="categories-section">
      <div className="categories-heading">
        <div>
          <h2>Our Categories</h2>
          <p>Explore our range of quality truck spare parts.</p>
        </div>

        <div className="categories-buttons">
          <button onClick={scrollLeft} aria-label="Previous category">
            ←
          </button>

          <button onClick={scrollRight} aria-label="Next category">
            →
          </button>
        </div>
      </div>

      <div className="categories-carousel" ref={carouselRef}>
        {categories.map((category, index) => (
          <div className="category-box" key={index}>
            <img
              src={category.image}
              alt={category.name}
            />

            <h3>{category.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Categories;