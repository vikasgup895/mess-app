import React from 'react';
import './Home.css';
import Slider from 'react-slick'; // Assuming you're using react-slick for the carousel
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import slider1 from './Image/slider1.png';
import slider2 from './Image/slider2.png';
import slider3 from './Image/slider3.png';

const Home = () => {
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
      <div className="welcome-section">
        <h1>Welcome to ABSEC Hostel Mess Service</h1>
        <p>
          Enjoy nutritious and delicious meals every day. Our menu is tailored to meet 
          your taste and health needs.
        </p>
        </div>
        <div>
        <Slider {...sliderSettings}>
          <div className="slider-container">
          <img src={slider1} 
             alt="Delicious Meals"
              className="slider-image"
               />
          </div>
          <div className="slider-container">
            <img
              src="slider2.jpg"
              alt="Healthy Food Options"
              className="slider-image"
            />
          </div>
          <div className="slider-container">
            <img
              src="slider3.jpg"
              alt="Comfortable Dining Area"
              className="slider-image"
            />
          </div>
        </Slider>
      </div>
      <div className="lookup-section">
        <div className="lookup-card">
          <h2>Weekly Menu</h2>
          <p>Explore our variety-packed menu designed to make every meal exciting.</p>
          <button style={{ marginTop: '-10px' }}>View Menu</button>
        </div>
        <div className="lookup-card">
          <h2>Contact Us</h2>
          <p>Have queries or feedback? We’d love to hear from you!</p>
          <button style={{ marginTop: '-10px' }}>Get in Touch</button>
        </div>
        <div className="lookup-card">
          <h2>Scan QR</h2>
          <p>Access services quickly by scanning our QR code.</p>
          <button style={{ marginTop: '-10px' }}>Scan QR</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
