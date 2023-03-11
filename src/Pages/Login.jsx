import React from "react";
import { Link } from "react-router-dom";
import "./login.scss";

function Login() {
  return (
    <div className="login">
      <div className="login-container">
        <h2>Log In</h2>
        <form>
          <label htmlFor="email">Email Address:</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" required />

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
