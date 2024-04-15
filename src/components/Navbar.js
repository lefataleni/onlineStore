import React from "react";
import "./Navbar.css"; // Import CSS for styling
import { Link } from "react-router-dom"; // Import React Router

// Navbar component
const Navbar = () => {
  return (
    <nav className="navbar">
      {/* navigation links using React Router's Link component */}
      <Link to="/" className="nav-link">
        Home
      </Link>
      <Link to="/Products" className="nav-link">
        Products
      </Link>
      <Link to="/About" className="nav-link">
        About
      </Link>
    </nav>
  );
};

export default Navbar; // Export the Navbar component 
