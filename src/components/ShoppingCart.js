import React from "react";
import "./shoppingCart.css"; // Import CSS for styling
import { Link } from "react-router-dom"; // Import React Router
import { BsCart3 } from "react-icons/bs";
import { AiOutlineInfoCircle } from "react-icons/ai";

// ShoppingCart component
const ShoppingCart = () => {
  return (
    <div className="shoppingCartDiv">
      <nav className="ShoppingCartNav">
        {/* navigation links using React Router's Link component */}
        <Link to="/ShoppingCartPage" className="ShoppingCart">
        <BsCart3 />
      </Link>
      </nav>
      <div className="shoppingCartInfo">
        <p className="cartInfo">
          {" "}
          <AiOutlineInfoCircle /> click to view cart{" "}
        </p>
      </div>
    </div>
  );
};

export default ShoppingCart; // Export the ShoppingCart component
