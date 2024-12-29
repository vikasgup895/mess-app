import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './UserLogin.css';

const UserLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('User logged in with:', username, password);
  };

  return (
    <div className="user-login-container">
      <h2 className="login-title">User Login</h2>
      <form className="login-form" onSubmit={handleSubmit}>
        <div className="input-container">
          <label htmlFor="username" className="input-label">Username</label>
          <input
            type="text"
            id="username"
            className="input-field"
            placeholder="Enter your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="input-container">
          <label htmlFor="password" className="input-label">Password</label>
          <input
            type="password"
            id="password"
            className="input-field"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="login-btn">Login</button>
      </form>
      <div className="other-options">
        <p>Don't have an account? <Link to="/user-register" className="register-link">Sign up</Link></p>
        <p><Link to="/forgot-password" className="forgot-password-link">Forgot Password?</Link></p>
      </div>
    </div>
  );
};

export default UserLogin;
