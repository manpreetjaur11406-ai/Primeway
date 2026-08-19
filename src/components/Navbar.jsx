import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const goToSection = (sectionId) => {
    closeMenu();

    if (window.location.pathname === "/") {
      const section = document.getElementById(sectionId);

      if (section) {
        section.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }

      return;
    }

    navigate("/");

    setTimeout(() => {
      const section = document.getElementById(sectionId);

      if (section) {
        section.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }, 300);
  };

  return (
    <nav className="navbar">
      <div className="nav-links">
        <button type="button" onClick={() => goToSection("home")}>
          Home
        </button>

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