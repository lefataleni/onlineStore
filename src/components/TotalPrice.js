import "./TotalPrice.css"; // Import the CSS file named TotalPrice.css

const TotalPrice = ({ totalPrice }) => {
  // Define a functional component named TotalPrice that takes a prop called totalPrice
  return (
    <h2 className="totalPrice">
      Total price - R{totalPrice.toFixed(2)}
    </h2> // Render an h2 element with the class 'totalPrice' and display the total price formatted as R{totalPrice.toFixed(2)}
  );
};

export default TotalPrice; // Export the TotalPrice component as the default export
