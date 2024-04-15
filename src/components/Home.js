import React, { useState } from "react"; // Import React and useState hook
import { Formik, Form, Field, ErrorMessage } from "formik"; // Import Formik components
import { useNavigate } from "react-router-dom"; // Import useNavigate hook
import "./Home.css"; // Import CSS file for styling

const Home = () => {
  const [loggedIn, setLoggedIn] = useState(false); // State for login status
  const [userName, setUserName] = useState(""); // State for user name
  const navigate = useNavigate(); // Initialize navigation hook

  const validateEmail = (value) => {
    // Custom email validation logic
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i; // Regular expression for valid email format
    return emailRegex.test(value) ? undefined : "Invalid email address"; // Return error message if email is invalid
  };

  const handleLogout = () => {
    // Function to handle logout
    setLoggedIn(false); // Set login status to false
    setUserName(""); // Clear user name
  };

  return (
    <div className="home-container">
      {" "}
      {/* Main container */}
      {loggedIn ? ( // If user is logged in
        <>
          <div>
            <h1>Welcome to our Online Store, {userName}!</h1>{" "}
            {/* Display welcome message with user name */}
            <p>Explore and find great deals.</p> {/* Additional information */}
          </div>
          <button className="button" onClick={handleLogout}>
            Logout
          </button>{" "}
          {/* Logout button */}
        </>
      ) : (
        // If user is not logged in
        <>
          <br />
          <img className="logo" src="https://img.freepik.com/premium-vector/online-shopping-logo-design-template-digital-shopping-logo-mouse-cursor-cart-concepts_502185-286.jpg" alt="Online Shopping Logo" />{" "}
          {/* Display logo image */}
          <br />
          <h2>LOGIN</h2> {/* Login header */}
          <Formik
            initialValues={{ email: "", password: "" }} // Initial form values
            onSubmit={(values) => {
              console.log("Login form submitted:", values); // Log form submission
              setUserName(values.email); // Set user name from email
              setLoggedIn(true); // Set login status to true
            }}
          >
            <Form>
              {" "}
              {/* Form element */}
              <div>
                <label >Email   </label>
                <Field 
                className="loginButton"
                  type="email"
                  name="email"
                  validate={validateEmail}
                />{" "}
                {/* Email input field */}
                <ErrorMessage
                  name="email"
                  component="div"
                  className="error-message"
                />{" "}
                {/* Display email validation error */}
              </div>
              <div>
                <label>Password  </label>
                <Field className="loginButtonPassword" type="password" name="password" />{" "}
                {/* Password input field */}
                <ErrorMessage
                  name="password"
                  component="div"
                  className="error-message"
                />{" "}
                {/* Display password validation error */}
              </div>
              <button className="button" type="submit">
                Login
              </button>{" "}
              {/* Submit button */}
            </Form>
          </Formik>
          <p>OR</p> {/* Alternative login option */}
          <button className="button" onClick={() => navigate("/Registration")}>
            Create an Account
          </button>{" "}
          {/* Button to navigate to registration page */}
        </>
      )}
    </div>
  );
};

export default Home; // Export Home component

// // Import React and necessary dependencies
// import React, { useState } from "react";
// import "./Home.css"; // Import CSS for styling

// // Define the Home component
// const Home = () => {
//   // Initialize state variables using the useState hook
//   const [userName, setUserName] = useState("");
//   const [loggedIn, setLoggedIn] = useState(false);

//   // Function to handle login
//   const handleLogin = () => {
//     if (userName.trim() !== "") {
//       setLoggedIn(true); // Set loggedIn to true if userName is not empty
//     }
//   };

//   // Function to handle logout
//   const handleLogout = () => {
//     setLoggedIn(false); // Set loggedIn to false
//     setUserName(""); // Clear the userName
//   };

//   return (
//     <div className="home-container">
//       {loggedIn ? ( // If loggedIn is true, show welcome message and logout button
//         <>
//           <div>
//             <h1>Welcome to our Online Store, {userName}!</h1>
//             <p>Explore our amazing products and find great deals.</p>
//           </div>

//           {/* Logout button */}
//           <button className="button" onClick={handleLogout}>
//             Logout
//           </button>
//         </>
//       ) : (
//         // If not loggedIn, show login form
//         <>
//           <br />
//           {/* display store logo over h2 */}
//           <img
//             src=""
//             alt="Online Shopping Logo"
//           />
//           {/* display h2 over login bar */}
//           <br />
//           <h2>LOGIN</h2>
//           <input
//             className="loginButton"
//             type="text"
//             placeholder="Enter your name"
//             value={userName}
//             onChange={(e) => setUserName(e.target.value)}
//           />
//           <button className="button" onClick={handleLogin}>
//             Login
//           </button>
//           <p>OR</p>
//           <button className="button" onClick={handleLogin}>
//             Create a new account
//           </button>
//         </>
//       )}
//     </div>
//   );
// };

// export default Home; // Export the Home component
