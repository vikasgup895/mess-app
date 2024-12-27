import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Home from './Components/Home'; // Import Home component

// Placeholder components for other routes
const UserLogin = () => <div>User Login Page</div>;
const AdminLogin = () => <div>Admin Login Page</div>;
const Breakfast = () => <div>Breakfast Menu</div>;
const Lunch = () => <div>Lunch Menu</div>;
const Snacks = () => <div>Snacks Menu</div>;
const Dinner = () => <div>Dinner Menu</div>;
const Contact = () => <div>Contact Us Page</div>;
const About = () => <div>About Us Page</div>;

const App = () => {
  const location = useLocation(); // Get the current location

  // Define routes where Navbar and Footer should NOT appear
  const noNavbarFooterRoutes = ['/user-login', '/admin-login'];

  // Check if the current route matches the restricted routes
  const shouldHideNavbarFooter = noNavbarFooterRoutes.includes(location.pathname);

  return (
    <div>
      {/* Conditionally render Navbar */}
      {!shouldHideNavbarFooter && <Navbar />}

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user-login" element={<UserLogin />} />
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/breakfast" element={<Breakfast />} />
        <Route path="/lunch" element={<Lunch />} />
        <Route path="/snacks" element={<Snacks />} />
        <Route path="/dinner" element={<Dinner />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>

      {/* Conditionally render Footer */}
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
