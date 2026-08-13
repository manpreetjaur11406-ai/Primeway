import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaBars,
  FaChevronDown,
} from "react-icons/fa";

import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">

      {/* =========================
          BROWSE CATEGORIES
      ========================= */}
      <button
        type="button"
        className="browse-categories"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <FaBars className="menu-icon" />

        <span>Browse Categories</span>

        <FaChevronDown
          className={`arrow-icon ${
            menuOpen ? "arrow-open" : ""
          }`}
        />
      </button>

      {/* =========================
          MAIN NAVIGATION
      ========================= */}
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/about">About Us</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/contact">Contact Us</Link>
      </div>

      {/* =========================
          CATEGORY DROPDOWN
      ========================= */}
      {menuOpen && (
        <div className="category-menu">
          <Link to="/products">All Products</Link>
          <Link to="/products">Engine Parts</Link>
          <Link to="/products">Filters</Link>
          <Link to="/products">Brake Parts</Link>
          <Link to="/products">Truck Accessories</Link>
        </div>
      )}

    </nav>
  );
}

export default Navbar;