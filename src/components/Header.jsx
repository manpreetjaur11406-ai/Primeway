
import { Link } from "react-router-dom";
import { FaSearch, FaUser, FaShoppingCart } from "react-icons/fa";
import "./Header.css";

function Header() {
  return (
    <>
      {/* Top Bar */}
      <div className="top-bar">
        <div className="shipping-text">
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
          <button>
            <FaSearch />
          </button>
        </div>

        {/* Header Icons */}
        <div className="header-icons">

          <div className="header-icon">
            <FaUser />
            <span>Account</span>
          </div>

          <div className="header-icon">
            <FaShoppingCart />
            <span>Cart</span>
          </div>

        </div>

      </header>
    </>
  );
}

export default Header;