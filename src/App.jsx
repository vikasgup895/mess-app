import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Home from './Components/Home'; 
import DminLogin from './Components/Dminlogin';
import UserLogin from './Components/Userlogin';
import AboutUs from './Components/AboutUs';

const Breakfast = () => <div>Breakfast Menu</div>;
const Lunch = () => <div>Lunch Menu</div>;
const Snacks = () => <div>Snacks Menu</div>;
const Dinner = () => <div>Dinner Menu</div>;
const Contact = () => <div>Contact Us Page</div>;

const App = () => {
  const location = useLocation();
  const noNavbarFooterRoutes = ['/Userlogin', '/admin-login'];
  const shouldHideNavbarFooter = noNavbarFooterRoutes.includes(location.pathname);

  return (
    <div>
      {!shouldHideNavbarFooter && <Navbar />}
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/Userlogin" element={<UserLogin />} />
        <Route path="/Dminlogin" element={<DminLogin />} />
        <Route path="/breakfast" element={<Breakfast />} />
        <Route path="/lunch" element={<Lunch />} />
        <Route path="/snacks" element={<Snacks />} />
        <Route path="/dinner" element={<Dinner />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/AboutUs" element={<AboutUs />} />
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
