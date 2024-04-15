// ProductCard.js
import React, { useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import "./ProductCard.css"; // Import the CSS file for styling

const ProductCard = ({ product, handleBuy }) => {
  const { id, name, description, price } = product; // Destructure product properties
  const [selectedColor, setSelectedColor] = useState(null); // Initialize color state

  const colorOptions = ["Red", "Blue", "Green"]; // Available color options

  // Handle color selection
  const handleColorSelect = (color) => {
    setSelectedColor(color);
    // able to add other logic here
  };

  // Handle buy button click
  const handleBuyClick = () => {
    handleBuy(price); // Pass the product price to the parent component
  };

  return (
    <div className="product-card">
      <img src={product.image} alt={name} /> {/* Display product image */}
      <h3>{name}</h3> {/* Display product name */}
      <p>{description}</p> {/* Display product description */}
      <span className="price">R{price}</span> {/* Display product price */}

      {/* Color Dropdown */}
      <Dropdown>
        <Dropdown.Toggle variant="secondary" id={`color-dropdown-${id}`}>
          {selectedColor ? selectedColor : "Select Color"} {/* Display selected color or default message */}
        </Dropdown.Toggle>
        <Dropdown.Menu>
          {colorOptions.map((color) => (
            <Dropdown.Item className="colorOptions" key={color} onClick={() => handleColorSelect(color)}>
              {color} {/* Display color options in the dropdown */}
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>

      <button className="buy-button" onClick={handleBuyClick}>Buy</button> {/* Buy button */}
      
    </div>
  );
};

export default ProductCard;
