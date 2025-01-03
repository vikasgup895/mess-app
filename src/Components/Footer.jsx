import React, { forwardRef } from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = forwardRef((props, ref) => (
  <footer className="site-footer" ref={ref}>
    <div className="footer-content">
      {/* About Section */}
      <div className="footer-section">
        <h3>About ABESEC Hostel Mess</h3>
        <p>We treat people the way we want to be treated.</p>
        <p>
          We prioritize hygiene, quality, and variety in our food services to
          ensure that students feel at home.
        </p>
      </div>
      {/* Quick Links Section */}
      <div className="footer-section">
        <h3>Quick Links</h3>
        <ul className="footer-links">
          <li><Link to="/Home"><i className="fas fa-chevron-right"></i> Home</Link></li>
          <li><Link to="/breakfast"><i className="fas fa-chevron-right"></i> Menu</Link></li>
          <li><Link to="/AboutUs"><i className="fas fa-chevron-right"></i> About Us</Link></li>
          <li><button className="btn btn-link" onClick={props.onContactClick}><i className="fas fa-chevron-right"></i> Contact</button></li>
        </ul>
      </div>
      {/* Contact Us Section */}
      <div className="footer-section">
        <h3>Contact Us</h3>
        <div className="footer-contact">
          <p><i className="fas fa-phone"></i> 01207135112</p>
          <p><i className="fas fa-envelope"></i> webadmin@abes.ac.in</p>
          <p><i className="fas fa-map-marker-alt"></i> NH-09, Ghaziabad (U.P.)</p>
          <p><i className="fas fa-clock"></i> Mon - Sun: 9:00 AM - 6:00 PM</p>
        </div>
        <div className="footer-social">
          <a href="#" className="social-link"><i className="fab fa-facebook-f"></i></a>
          <a href="#" className="social-link"><i className="fab fa-twitter"></i></a>
          <a href="#" className="social-link"><i className="fab fa-instagram"></i></a>
          <a href="#" className="social-link"><i className="fab fa-linkedin-in"></i></a>
        </div>
      </div>
    </div>
    {/* Footer Bottom */}
    <div className="footer-bottom">
      <p>&copy; 2024 ABESEC Hostel Mess - All rights reserved. | <Link to="#">Privacy Policy</Link> | <Link to="#">Terms of Service</Link></p>
    </div>
  </footer>
));

export default Footer;
