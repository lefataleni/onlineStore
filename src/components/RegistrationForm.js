import React, { useState } from "react";
import "./Home.css";
import "./RegistrationForm.css"

const RegistrationForm = () => {
  // State for form data
  const [formData, setFormData] = useState({
    firstName: "",
    surname: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  // State for registration success
  const [registrationSuccess, setRegistrationSuccess] = useState(false);

  // State for form validation errors
  const [errors, setErrors] = useState({});

  // Function to validate form input
  const validateForm = () => {
    const newErrors = {};

    // Validate first name (not exceeding 15 characters)
    if (formData.firstName.length > 15) {
      newErrors.firstName = "First name must not exceed 15 characters";
    }

    // Validate surname (not exceeding 20 characters)
    if (formData.surname.length > 20) {
      newErrors.surname = "Surname must not exceed 20 characters";
    }

    // Validate email (basic format check)
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    if (!emailRegex.test(formData.email)) {
      newErrors.email = "Invalid email address";
    }

    // Validate password (at least 8 characters)
    if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters";
    }

    // Validate confirm password (match with password)
    if (formData.confirmPassword !== formData.password) {
      newErrors.confirmPassword = "Passwords must match";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Handle form submission (e.g., API call)
      console.log("Registration form submitted:", formData);

      // Set registration success state
      setRegistrationSuccess(true);
    }
  };

  // Function to handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="registration-form">
      <h2>Registration</h2>
      {registrationSuccess ? (
        <p className="success-message">Registration successful! 🎉</p>
      ) : (
        <form className="formFields" onSubmit={handleSubmit}>
          {/* First Name */}
          <div className="divField">
            <label>First Name:</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
            />
            {errors.firstName && (
              <span className="error">{errors.firstName}</span>
            )}
          </div>

          {/* Surname */}
          <div className="divField">
            <label>Surname:</label>
            <input
              className="field"
              type="text"
              name="surname"
              value={formData.surname}
              onChange={handleChange}
            />
            {errors.surname && <span className="error">{errors.surname}</span>}
          </div>

          {/* Email */}
          <div className="divField">
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <span className="error">{errors.email}</span>}
          </div>

          {/* Password */}
          <div className="divField">
            <label>Password:</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
            {errors.password && (
              <span className="error">{errors.password}</span>
            )}
          </div>

          {/* Confirm Password */}
          <div className="divField">
            <label>Confirm Password:</label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
            />
            {errors.confirmPassword && (
              <span className="error">{errors.confirmPassword}</span>
            )}
          </div>

          {/* Submit Button */}
          <button className="button" type="submit">
            Register
          </button>
        </form>
      )}
    </div>
  );
};

export default RegistrationForm;

// Password123!
