import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FeedbackForm from './FeedbackForm'; // Import FeedbackForm component
import './Home.css';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import slider1 from './Image/slider1.png';
import slider2 from './Image/slider2.jpg';
import slider3 from './Image/slider3.jpeg';

const Home = () => {
  const navigate = useNavigate(); 
  const [isFeedbackOpen, setIsFeedbackOpen] = useState(false); // State for feedback popup

  const handleTodayMenuClick = () => {
    navigate('/TodayMenu');
  };

  const handleFeedbackFormClick = () => {
    setIsFeedbackOpen(true); // Open the popup when "Get in Touch" is clicked
  };

  const closeFeedbackForm = () => {
    setIsFeedbackOpen(false); // Close the popup
  };

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="home">
      {/* Welcome Section */}
      <div className="welcome-section">
        <h1>Welcome to ABSEC Hostel Mess Service</h1>
       <p>
          Enjoy nutritious and delicious meals every day. Our menu is tailored to meet 
          your taste and health needs.
        </p>
      </div>

      {/* Image Slider Section */}
      <div>
        <Slider {...sliderSettings}>
          <div className="slider-container">
            <img src={slider1} alt="Delicious Meals" className="slider-image" />
          </div>
          <div className="slider-container">
            <img src={slider2} alt="Healthy Food Options" className="slider-image" />
          </div>
          <div className="slider-container">
            <img src={slider3} alt="Comfortable Dining Area" className="slider-image" />
          </div>
        </Slider>
      </div>

      {/* Lookup Section */}
      <div className="lookup-section">
        <div className="lookup-card">
          <h2>Today Menu</h2>
          <p>Explore our variety-packed menu designed to make every meal exciting.</p>
          <button onClick={handleTodayMenuClick} className="view-menu-button">View Menu</button>
        </div>

        <div className="lookup-card">
          <h2>Generate QR for Meal</h2>
          <p>Generate a QR code for your meal to make the Entry process easier.</p>
          <button className="generate-qr-button">Generate QR Code</button>
        </div>

        <div className="lookup-card">
          <h2>Contact Us</h2>
          <p>Have queries or feedback? We'd love to hear from you!</p>
          <button onClick={handleFeedbackFormClick} className="contact-us-button">Get in Touch</button>
        </div>
      </div>

      {/* Feedback Popup */}
      {isFeedbackOpen && <FeedbackForm closePopup={closeFeedbackForm} />}
    </div>
  );
};

export default Home;
