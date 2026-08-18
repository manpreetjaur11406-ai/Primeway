import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import "./Navbar.css";

function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);

  const navigate = useNavigate();

  const closeMenu = () => {
    setMenuOpen(false);
  };

  /* =========================================
     SMOOTH SCROLL TO HOME SECTION
  ========================================= */

  const goToSection = (sectionId) => {
    closeMenu();

    const currentPath = window.location.pathname;

    if (currentPath === "/") {
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

      {/* MAIN NAVIGATION */}

      <div className="nav-links">

        <button
          type="button"
          onClick={() => goToSection("home")}
        >
          Home
        </button>

        <Link
          to="/products"
          onClick={closeMenu}
        >
          Products
        </Link>

        <button
          type="button"
          onClick={() => goToSection("about")}
        >
          About Us
        </button>

        <Link
          to="/blog"
          onClick={closeMenu}
        >
          Blog
        </Link>

        <button
          type="button"
          onClick={() => goToSection("contact")}
        >
          Contact Us
        </button>

      </div>

      {/* CATEGORY DROPDOWN */}

      {menuOpen && (

        <div className="category-menu">

          <Link
            to="/products"
            onClick={closeMenu}
          >
            All Products
          </Link>

          <Link
            to="/products"
            onClick={closeMenu}
          >
            Engine Parts
          </Link>

          <Link
            to="/products"
            onClick={closeMenu}
          >
            Filters
          </Link>

          <Link
            to="/products"
            onClick={closeMenu}
          >
            Brake Parts
          </Link>

          <Link
            to="/products"
            onClick={closeMenu}
          >
            Truck Accessories
          </Link>

        </div>

      )}

    </nav>
  );
}

export default Navbar;