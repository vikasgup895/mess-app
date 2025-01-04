import React, { useRef } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Home from './Components/Home';
import DminLogin from './Components/Dminlogin';
import UserLogin from './Components/Userlogin';
import AboutUs from './Components/AboutUs';
import TodayMenu from './Components/TodayMenu';
import WeekMenu from './Components/WeekMenu';


const Contact = () => <div>Contact Us Page</div>;

const App = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const footerRef = useRef(null);

  const noNavbarFooterRoutes = ['/Userlogin', '/DminLogin'];
  const shouldHideNavbarFooter = noNavbarFooterRoutes.includes(location.pathname);

  const handleContactClick = () => {
    if (location.pathname === '/Home' && footerRef.current) {
      footerRef.current.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/Home');
      setTimeout(() => {
        footerRef.current?.scrollIntoView({ behavior: 'smooth' });
      }, 100); // Delay to allow navigation to complete
    }
  };

  return (
    <div>
      {!shouldHideNavbarFooter && <Navbar onContactClick={handleContactClick} />}
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/Userlogin" element={<UserLogin />} />
        <Route path="/Dminlogin" element={<DminLogin />} />
        <Route path="/TodayMenu" element={<TodayMenu />} />
        <Route path="/WeekMenu" element={<WeekMenu />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/AboutUs" element={<AboutUs />} />
      </Routes>
      {!shouldHideNavbarFooter && <Footer ref={footerRef} />}
    </div>
  );
};

const MainApp = () => (
  <Router>
    <App />
  </Router>
);

export default MainApp;
