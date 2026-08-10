import { useState } from "react";
import { FaBars } from "react-icons/fa";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">

      {/* Browse Categories */}
      <div
        className="browse-categories"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <FaBars />
        <span>Browse Categories</span>
      </div>

      {/* Navigation Menu */}
      {menuOpen && (
        <div className="category-menu">
          <a href="#home">Home</a>
          <a href="#products">Products</a>
          <a href="#brands">Brands</a>
          <a href="#about">About Us</a>
          <a href="#blog">Blog</a>
          <a href="#contact">Contact Us</a>
        </div>
      )}

    </nav>
  );
}

export default Navbar;