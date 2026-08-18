import { useState } from "react";
import { Link } from "react-router-dom";

import {
  FaSearch,
  FaTruck,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaBars,
  FaTimes,
  FaUser,
} from "react-icons/fa";

import "./Header.css";

import primewayLogo from "../assets/logo pp.png";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("menu");

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      {/* =====================================================
          TOP BAR
      ===================================================== */}

      <div className="top-bar">
        <div className="top-bar-inner">

          {/* SOCIAL ICONS */}

          <div className="top-social">
            <a
              href="YOUR_PRIMEWAY_FACEBOOK_LINK"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <FaFacebookF />
            </a>

            <a
              href="YOUR_PRIMEWAY_INSTAGRAM_LINK"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>

            <a
              href="YOUR_PRIMEWAY_LINKEDIN_LINK"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn />
            </a>
          </div>

          {/* SHIPPING */}

          <div className="top-shipping">
            <FaTruck />

            <span>
              Free shipping for all orders of $150
            </span>
          </div>

        </div>
      </div>


      {/* =====================================================
          MAIN HEADER
      ===================================================== */}

      <header className="main-header">

        <div className="main-header-inner">

          {/* =================================================
              MOBILE MENU BUTTON
          ================================================= */}

          <button
            className="mobile-menu-button"
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>


          {/* =================================================
              PRIMEWAY LOGO
          ================================================= */}

          <Link
            to="/"
            className="logo"
            onClick={closeMenu}
          >
            <img
              src={primewayLogo}
              alt="PrimeWay Traders LLC"
            />
          </Link>


          {/* =================================================
              DESKTOP SEARCH
          ================================================= */}

          <div className="search-box">

            <input
              type="text"
              placeholder="Search for products"
            />

            <button
              type="button"
              aria-label="Search"
            >
              <FaSearch />
            </button>

          </div>


          {/* =================================================
              DESKTOP LOGIN
          ================================================= */}

          <Link
            to="/login"
            className="login-link"
          >
            Login / Register
          </Link>

        </div>

      </header>


      {/* =====================================================
          MOBILE SIDE MENU OVERLAY
      ===================================================== */}

      {menuOpen && (
        <div
          className="mobile-menu-overlay"
          onClick={closeMenu}
        ></div>
      )}


      {/* =====================================================
          MOBILE SIDE MENU
      ===================================================== */}

      <aside
        className={`mobile-side-menu ${
          menuOpen ? "mobile-side-menu-open" : ""
        }`}
      >

        {/* =================================================
            MOBILE SEARCH
        ================================================= */}

        <div className="mobile-search">

          <div className="mobile-search-title">
            Search for pages
          </div>

          <div className="mobile-search-box">

            <input
              type="text"
              placeholder="Search for pages"
            />

            <button
              type="button"
              aria-label="Search"
            >
              <FaSearch />
            </button>

          </div>

        </div>


        {/* =================================================
            MENU / CATEGORIES TABS
        ================================================= */}

        <div className="mobile-menu-tabs">

          <button
            type="button"
            className={
              activeTab === "menu"
                ? "mobile-tab active"
                : "mobile-tab"
            }
            onClick={() => setActiveTab("menu")}
          >
            MENU
          </button>

          <button
            type="button"
            className={
              activeTab === "categories"
                ? "mobile-tab active"
                : "mobile-tab"
            }
            onClick={() => setActiveTab("categories")}
          >
            CATEGORIES
          </button>

        </div>


        {/* =================================================
            MENU CONTENT
        ================================================= */}

        {activeTab === "menu" && (
          <nav className="mobile-menu-links">

            <Link
              to="/"
              onClick={closeMenu}
            >
              HOME
            </Link>

            <Link
              to="/products"
              onClick={closeMenu}
            >
              PRODUCTS
            </Link>

            <Link
              to="/about"
              onClick={closeMenu}
            >
              ABOUT US
            </Link>

            <Link
              to="/blog"
              onClick={closeMenu}
            >
              BLOG
            </Link>

            <Link
              to="/contact"
              onClick={closeMenu}
            >
              CONTACT US
            </Link>

            <Link
              to="/login"
              className="mobile-login-link"
              onClick={closeMenu}
            >
              <FaUser />
              <span>LOGIN / REGISTER</span>
            </Link>

          </nav>
        )}


        {/* =================================================
            CATEGORIES CONTENT
        ================================================= */}

        {activeTab === "categories" && (
          <div className="mobile-categories">

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
              Filters
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
              Fuel System
            </Link>

            <Link
              to="/products"
              onClick={closeMenu}
            >
              Truck Accessories
            </Link>

            <Link
              to="/products"
              onClick={closeMenu}
            >
              Cooling System
            </Link>

          </div>
        )}

      </aside>
    </>
  );
}

export default Header;