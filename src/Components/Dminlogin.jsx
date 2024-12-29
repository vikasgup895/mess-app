import React from 'react';
import { Link } from 'react-router-dom';
import './DminLogin.css';

const DminLogin = () => {
  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Admin Login</h2>
        <form>
          <div className="input-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Enter your username"
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              required
            />
          </div>
          <button type="submit" className="login-btn">Login</button>
          <div className="footer-links">
            <p>Don't have an account? <Link to="/register">Register</Link></p>
            <p><Link to="/forgot-password">Forgot Password?</Link></p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DminLogin;
