import React from 'react';
import { Link } from 'react-router-dom';
import  './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link className="navbar-brand" to="/">ABESEC HOSTEL MESS</Link>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarScroll"
        aria-controls="navbarScroll"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarScroll">
        <ul className="navbar-nav ms-auto my-2 my-lg-0 navbar-nav-scroll">
          <li className="nav-item">
            <Link className="nav-link active" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/user-login">User Login</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/admin-login">Admin Login</Link>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Mess Menu
            </a>
            <ul className="dropdown-menu">
              <li><Link className="dropdown-item" to="/breakfast">Breakfast</Link></li>
              <li><Link className="dropdown-item" to="/lunch">Lunch</Link></li>
              <li><Link className="dropdown-item" to="/snacks">Snacks</Link></li>
              <li><Link className="dropdown-item" to="/dinner">Dinner</Link></li>
            </ul>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/contact">Contact Us</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">About</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
