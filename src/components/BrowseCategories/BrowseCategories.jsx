import "./BrowseCategories.css";

import { useRef } from "react";

import dieselFilter from "../../assets/diesel-filter truck.jpeg";
import petrolFilter from "../../assets/petrol filter.jpeg";
import airFilter from "../../assets/air-filter truck.jpeg";
import oilFilter from "../../assets/oil-filter.jpeg";
import brakePad from "../../assets/brake pad.jpeg";
import accessories from "../../assets/accessories.jpeg";

const categories = [
  {
    name: "Diesel Filter",
    image: dieselFilter,
  },
  {
    name: "Petrol Filter",
    image: petrolFilter,
  },
  {
    name: "Air Filter",
    image: airFilter,
  },
  {
    name: "Oil Filter",
    image: oilFilter,
  },
  {
    name: "Brake Pad",
    image: brakePad,
  },
  {
    name: "Accessories",
    image: accessories,
  },
];

function BrowseCategories() {
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
    <section className="browse-categories">

      <div className="browse-heading">
        <h2>Browse Categories</h2>

        <div className="carousel-buttons">
          <button onClick={scrollLeft}>←</button>
          <button onClick={scrollRight}>→</button>
        </div>
      </div>

      <div className="category-grid" ref={carouselRef}>
        {categories.map((item, index) => (
          <div className="category-card" key={index}>
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
          </div>
        ))}
      </div>

    </section>
  );
}

export default BrowseCategories;