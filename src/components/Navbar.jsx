import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaBars,
  FaChevronDown,
} from "react-icons/fa";

import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

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
          DESKTOP NAVIGATION
      ========================= */}

      <div className="nav-links">

        <Link to="/" onClick={closeMenu}>
          Home
        </Link>

        <Link to="/products" onClick={closeMenu}>
          Products
        </Link>

        <Link to="/about" onClick={closeMenu}>
          About Us
        </Link>

        <Link to="/blog" onClick={closeMenu}>
          Blog
        </Link>

        <Link to="/contact" onClick={closeMenu}>
          Contact Us
        </Link>

      </div>


      {/* =========================
          CATEGORY DROPDOWN
      ========================= */}

      {menuOpen && (
        <div className="category-menu">

          <Link to="/products" onClick={closeMenu}>
            All Products
          </Link>

          <Link to="/products" onClick={closeMenu}>
            Engine Parts
          </Link>

          <Link to="/products" onClick={closeMenu}>
            Filters
          </Link>

          <Link to="/products" onClick={closeMenu}>
            Brake Parts
          </Link>

          <Link to="/products" onClick={closeMenu}>
            Truck Accessories
          </Link>

        </div>
      )}

    </nav>
  );
}

export default Navbar;