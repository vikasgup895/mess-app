import React, { useState, useEffect } from 'react';
import { Link as RouterLink } from 'react-router-dom';  // Rename the react-router Link
import { Link as ScrollLink } from 'react-scroll';  // Rename the react-scroll Link
import './Navbar.css';

function Navbar() {
  const [nav, setNav] = useState(false);

  // Function to change navbar background on scroll
  const changeBackground = () => {
    if (window.scrollY >= 50) {
      setNav(true);
    } else {
      setNav(false);
    }
  };

  // Set up and clean up the scroll event listener
  useEffect(() => {
    window.addEventListener('scroll', changeBackground);

    return () => {
      window.removeEventListener('scroll', changeBackground);
    };
  }, []);

  return (
    <nav className={nav ? 'navbar navbar-expand-lg navbar-dark bg-dark active' : 'navbar navbar-expand-lg navbar-dark bg-dark'}>
      <RouterLink className="navbar-brand" to="/">ABESEC HOSTEL MESS</RouterLink>
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
            <RouterLink className="nav-link active" to="/">Home</RouterLink>
          </li>
          <li className="nav-item">
            <RouterLink className="nav-link" to="/user-login">User Login</RouterLink>
          </li>
          <li className="nav-item">
            <RouterLink className="nav-link" to="/admin-login">Admin Login</RouterLink>
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
              <li><RouterLink className="dropdown-item" to="/breakfast">Breakfast</RouterLink></li>
              <li><RouterLink className="dropdown-item" to="/lunch">Lunch</RouterLink></li>
              <li><RouterLink className="dropdown-item" to="/snacks">Snacks</RouterLink></li>
              <li><RouterLink className="dropdown-item" to="/dinner">Dinner</RouterLink></li>
            </ul>
          </li>
          <li className="nav-item">
            <ScrollLink className="nav-link" to="Footer" smooth={true} duration={1000}>Contact</ScrollLink>
          </li>
          <li className="nav-item">
            <RouterLink className="nav-link" to="/about">About</RouterLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
