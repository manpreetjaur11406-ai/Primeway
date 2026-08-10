import "./Brands.css";

import donaldson from "../../assets/donaldson-logo.jpeg";
import mannFilter from "../../assets/mann-filter.jpeg";
import fleetGuard from "../../assets/Logo.jpeg";
import bosch from "../../assets/bosch-logo.jpeg";

function Brands() {
  const brands = [
    {
      image: donaldson,
      name: "Donaldson",
    },
    {
      image: mannFilter,
      name: "MANN Filter",
    },
    {
      image: fleetGuard,
      name: "FleetGuard",
    },
    {
      image: bosch,
      name: "Bosch",
    },
  ];

  return (
    <section className="brands">
      <h2>Our Trusted Brands</h2>
      <p>We Deal With World-Class Truck Parts Brands</p>

      <div className="brands-container">
        {brands.map((brand, index) => (
          <div className="brand-card" key={index}>
            <img src={brand.image} alt={brand.name} />
            <h3>{brand.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Brands;