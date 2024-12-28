import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Home from './Components/Home'; 
import UserLogin from './Components/Userlogin';
/* import AdminLogin from './Components/Adminlogin'; */
import AboutUs from './Components/AboutUs';



const App = () => {
  const location = useLocation();

  // Define restricted routes
  const noNavbarFooterRoutes = ['/user-login', '/admin-login'];

  // Check if the current route matches the restricted routes
  const shouldHideNavbarFooter = noNavbarFooterRoutes.some((route) =>
    location.pathname.startsWith(route)
  );

  return (
    <div>
      {!shouldHideNavbarFooter && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user-login" element={<UserLogin />} />
        <Route path="/admin-login" element={<UserLogin />} />
        <Route path="/breakfast" element={<div>Breakfast Menu</div>} />
        <Route path="/lunch" element={<div>Lunch Menu</div>} />
        <Route path="/snacks" element={<div>Snacks Menu</div>} />
        <Route path="/dinner" element={<div>Dinner Menu</div>} />
        <Route path="/contact" element={<div>Contact Us</div>} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
      {!shouldHideNavbarFooter && <Footer />}
    </div>
  );
};

const MainApp = () => (
  <Router>
    <App />
  </Router>
);

export default MainApp;
