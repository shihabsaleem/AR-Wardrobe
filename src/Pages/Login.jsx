import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./../Components/Style/login.scss";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    // Perform data validation here
    if (email === "test@123" && password === "pass@123") {
      // Valid credentials, navigate to Home component
      navigate("/");
    } else {
      // Invalid credentials, display an error message
      console.log("Invalid credentials");
    }
  };

  return (
    <div className="login">
      <div className="login-container">
        <h2>Log In</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">Email Address:</label>
          <input
            placeholder="Email"
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label htmlFor="password">Password:</label>
          <input
            placeholder="Password"
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit">Log In</button>
        </form>
        <p>
          Don't have an account yet? <Link to="/register">Sign Up</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
