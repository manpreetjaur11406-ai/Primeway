import "./Brands.css";

import donaldson from "../../assets/Donaldson-logo.jpeg";
import mannFilter from "../../assets/mann-filter.jpeg";
import fleetGuard from "../../assets/logo.jpeg";
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

      {/* =========================
          HEADING
      ========================= */}

      <div className="brands-heading">

        <span className="brands-small-title">
          TRUSTED BRANDS
        </span>

        <h2>Our Trusted Brands</h2>

        <p>
          We deal with world-class truck parts brands
        </p>

      </div>


      {/* =========================
          BRANDS
      ========================= */}

      <div className="brands-container">

        {brands.map((brand, index) => (
          <div className="brand-card" key={index}>

            <div className="brand-image">

              <img
                src={brand.image}
                alt={brand.name}
              />

            </div>

            <h3>{brand.name}</h3>

          </div>
        ))}

      </div>

    </section>
  );
}

export default Brands;