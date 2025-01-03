import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({ onContactClick }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link className="navbar-brand" to="/Home">ABESEC HOSTEL MESS</Link>
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
            <Link className="nav-link active" to="/Home">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/Userlogin">User Login</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/Dminlogin">Admin Login</Link>
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
            <button className="nav-link btn btn-link" onClick={onContactClick}>
              Contact Us
            </button>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/AboutUs">About</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
