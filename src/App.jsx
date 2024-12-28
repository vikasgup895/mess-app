import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Home from './Components/Home';

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
  return (
    <div>
      <Navbar />
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
      <Footer />
    </div>
  );
};

const MainApp = () => (
  <Router>
    <App />
  </Router>
);

export default MainApp;
