import React from 'react'
import { Link } from 'react-router-dom';
import './Footer.css'

const Footer = () => {
  return (
    <footer class="site-footer">
    <div class="footer-content">
{/*          About Section */}
           <div class="footer-section">
            <h3>About ABESEC Hostel Mess</h3>
            <p>We treat people the way we want to be treated.</p>
           <p> We prioritize hygiene, quality, and variety in our food services to ensure that students feel at home.</p>
        </div>
{/*     Quick Links Section  */}
        <div class="footer-section">
            <h3>Quick Links</h3>
            <ul class="footer-links">
                <li><a href="/"><i class="fas fa-chevron-right"></i> Home</a></li>
                <li><a href="#courses"><i class="fas fa-chevron-right"></i> Menu</a></li>
                <li><a href="/about.html"><i class="fas fa-chevron-right"></i> About Us</a></li>
                <li><a href="/contact.html"><i class="fas fa-chevron-right"></i> Contact</a></li>
            </ul>
        </div>

        {/* <!-- Contact Us Section --> */}
        <div class="footer-section">
            <h3>Contact Us</h3>
            <div class="footer-contact">
                <p><i class="fas fa-phone"></i> 01207135112</p>
                <p><i class="fas fa-envelope"></i> webadmin@abes.ac.in</p>
                <p><i class="fas fa-map-marker-alt"></i> NH-09, Ghaziabad (U.P.)</p>
                <p><i class="fas fa-clock"></i> Mon - Sun: 9:00 AM - 6:00 PM</p>
            </div>
            <div class="footer-social">
                <a href="#" class="social-link"><i class="fab fa-facebook-f"></i></a>
                <a href="#" class="social-link"><i class="fab fa-twitter"></i></a>
                <a href="#" class="social-link"><i class="fab fa-instagram"></i></a>
                <a href="#" class="social-link"><i class="fab fa-linkedin-in"></i></a>
            </div>
        </div>
    </div>
    {/* <!-- Footer Bottom --> */}
    <div class="footer-bottom">
        <p>&copy; 2024 ABESEC Hostel Mess - All rights reserved. | <a href="#">Privacy Policy</a> | <a href="#">Terms of Service</a></p>
    </div>
</footer>
  )
}

export default Footer