import "./Navbar.css";
import { FaBars } from "react-icons/fa";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="browse">
        <FaBars />
        <span>Browse Categories</span>
      </div>

      <ul className="nav-links">
        <li><a href="#">Home</a></li>
        <li><a href="#">Products</a></li>
        <li><a href="#">Brands</a></li>
        <li><a href="#">About Us</a></li>
        <li><a href="#">Blog</a></li>
        <li><a href="#">Contact Us</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;