// src/App.js

// Import React and necessary dependencies
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Import BrowserRouter, Routes, and Route from react-router-dom
import Navbar from "./components/Navbar"; // Import the Navbar component
import Home from "./components/Home"; // Import the Home component
import About from "./components/About"; // Import the About component
import Products from "./components/Products"; // Import the Products component
import RegistrationForm from "./components/RegistrationForm";
import ShoppingCart from "./components/ShoppingCart";
import ShoppingCartPage from "./components/ShoppingCartPage";

const App = () => {

  return (
    <Router>
      {/* Render the Navbar component */}
      <Navbar />

      {/* Define routes using the Routes and Route components */}
      <Routes>
        <Route path="/" element={<Home />} />{" "}
        {/* Render the Home component when the path is "/" */}
        <Route path="/registration" element={<RegistrationForm />} />{" "}
        {/* Render the Registration component when the path is "/signup" */}
        <Route path="/products" element={<Products />} />{" "}
        {/* Render the Products component when the path is "/products" */}
        <Route path="/products" element={<ShoppingCart />} />{" "}
        {/* Render the ShoppingCart component when the path is "/products" */}
        <Route path="/about" element={<About />} />{" "}
        {/* Render the About component when the path is "/about" */}
        <Route path="/ShoppingCartPage" element={<ShoppingCartPage/>} />{" "}
        {/* Render the ShoppingCart component when the path is "/ShoppingCartPage" */}
      </Routes>
    </Router>
  );
};

export default App; // Export the App component