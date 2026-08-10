import heroImage from "../assets/truck engine.jpeg";
import diesel from "../assets/diesel-filter truck.jpeg";
import petrol from "../assets/petrol filter.jpeg";
import air from "../assets/air-filter truck.jpeg";
import oil from "../assets/oil-filter.jpeg";
import brake from "../assets/brake pad.jpeg";
import accessories from "../assets/accessories.jpeg";
function Categories() {
  return (
    <section
      style={{
        padding: "60px 40px",
        backgroundColor: "#f8f8f8",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          color: "#d71920",
          marginBottom: "30px",
        }}
      >
        Our Categories
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "20px",
        }}
      >
        <div style={cardStyle}>
  <img src={diesel} alt="Diesel Filters" style={imageStyle} />
  <h3>Diesel Filters</h3>
</div>

<div style={cardStyle}>
  <img src={petrol} alt="Petrol Filters" style={imageStyle} />
  <h3>Petrol Filters</h3>
</div>

<div style={cardStyle}>
  <img src={air} alt="Air Filters" style={imageStyle} />
  <h3>Air Filters</h3>
</div>

<div style={cardStyle}>
  <img src={oil} alt="Oil Filters" style={imageStyle} />
  <h3>Oil Filters</h3>
</div>

<div style={cardStyle}>
  <img src={brake} alt="Brake Pads" style={imageStyle} />
  <h3>Brake Pads</h3>
</div>

<div style={cardStyle}>
  <img src={accessories} alt="Accessories" style={imageStyle} />
  <h3>Accessories</h3>
</div>
      </div>
    </section>
  );
}

const cardStyle = {
  background: "#fff",
  padding: "20px",
  borderRadius: "10px",
  textAlign: "center",
  boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
  fontWeight: "bold",
};

const imageStyle = {
  width: "100%",
  height: "180px",
  objectFit: "cover",
  borderRadius: "8px",
  marginBottom: "15px",
};

export default Categories;