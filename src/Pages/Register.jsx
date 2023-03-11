import React, { useState } from "react";
import { Link } from "react-router-dom";

function Register() {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  return (
    <div className="login">
      <div className="login-container">
        <h2>Create an account</h2>
        <form>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" />

          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" />

          <label htmlFor="password">Password</label>
          <div className="password-input-container">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
            />
            <button
              type="button"
              className="password-toggle-btn"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>

          <button type="submit">Sign up</button>
        </form>
        <div className="signin-link">
          <p>
            Already have an account?
            <Link to="/login">Sign in</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Register;
