import { Link } from "react-router-dom";
import {
  FaSearch,
  FaUser,
  FaTruck,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

import "./Header.css";

import primewayLogo from "../assets/img.jpeg.png";

function Header() {
  return (
    <>
      {/* =========================
          TOP BAR
      ========================= */}
      <div className="top-bar">
        <div className="top-bar-inner">
          <div className="top-shipping">
            <FaTruck />
            <span>Free shipping for all orders of $150</span>
          </div>

          <div className="top-social">
            <span className="follow-text">Follow us</span>

            <a href="#" aria-label="Facebook">
              <FaFacebookF />
            </a>

            <a href="#" aria-label="Instagram">
              <FaInstagram />
            </a>

            <a href="#" aria-label="LinkedIn">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>

      {/* =========================
          MAIN HEADER
      ========================= */}
      <header className="main-header">
        <div className="main-header-inner">

          {/* LOGO */}
          <Link to="/" className="logo">
            <img
              src={primewayLogo}
              alt="PrimeWay Traders LLC"
            />
          </Link>

          {/* SEARCH */}
          <div className="search-box">
            <input
              type="text"
              placeholder="Search for products"
            />

            <button type="button">
              <FaSearch />
              <span>Search</span>
            </button>
          </div>

          {/* LOGIN */}
          <Link to="/login" className="login-link">
            <FaUser />
            <span>Login / Register</span>
          </Link>

        </div>
      </header>
    </>
  );
}

export default Header;