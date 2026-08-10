
import "./Header.css";
import {
  FaFacebookF,
  FaTwitter,
  FaPinterestP,
  FaLinkedinIn,
  FaUser,
  FaHeart,
  FaShoppingCart,
  FaSearch,
} from "react-icons/fa";

function Header() {
  return (
    <>
      {/* Top Bar */}
      <div className="top-bar">
        <div className="social-icons">
          <FaFacebookF />
          <FaTwitter />
          <FaPinterestP />
          <FaLinkedinIn />
        </div>

        <p>🚚 Free Shipping on Orders Over ₹1500</p>
      </div>

      {/* Main Header */}
      <header className="main-header">
        {/* Logo */}
        <div className="logo">
          <h1>
            <span>PRIME</span>WAY
          </h1>
        </div>

        {/* Search Box */}
        <div className="search-box">
          <input
            type="text"
            placeholder="Search truck spare parts..."
          />

          <button>
            <FaSearch />
          </button>
        </div>

        {/* Icons */}
        <div className="header-icons">
          <div className="icon-item">
            <FaUser />
            <span>Login</span>
          </div>

          <div className="icon-item">
            <FaHeart />
            <span>Wishlist</span>
          </div>

          <div className="icon-item">
            <FaShoppingCart />
            <span>Cart</span>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;