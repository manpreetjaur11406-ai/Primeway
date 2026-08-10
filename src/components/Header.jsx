
import { Link } from "react-router-dom";
import {
  FaSearch,
  FaUser,
  FaHeart,
  FaShoppingCart,
} from "react-icons/fa";
import "./Header.css";

function Header() {
  return (
    <>
      {/* Top Bar */}
      <div className="top-bar">
        <div className="top-left">
          🚚 Free Shipping on Orders Over ₹1500
        </div>

        <div className="top-right">
          <span>Need Help?</span>
          <span>📞 +91 98765 43210</span>
        </div>
      </div>

      {/* Main Header */}
      <header className="main-header">

        {/* Logo */}
        <Link to="/" className="logo">
          PrimeWay
        </Link>

        {/* Search */}
        <div className="search-box">
          <input
            type="text"
            placeholder="Search truck spare parts..."
          />

          <button type="button">
            <FaSearch />
          </button>
        </div>

        {/* Header Icons */}
        <div className="header-icons">

          {/* Login */}
          <Link to="/login" className="header-icon">
            <FaUser />
            <span>Login</span>
          </Link>

          {/* Wishlist */}
          <Link to="/wishlist" className="header-icon">
            <FaHeart />
            <span>Wishlist</span>
          </Link>

          {/* Cart */}
          <Link to="/cart" className="header-icon">
            <FaShoppingCart />
            <span>Cart</span>
          </Link>

        </div>

      </header>
    </>
  );
}

export default Header;