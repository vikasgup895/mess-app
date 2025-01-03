import React, { useState } from 'react';
import './Home.css';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import slider1 from './Image/slider1.png';
import slider2 from './Image/slider2.jpg';
import slider3 from './Image/slider3.jpeg';
import QRCode from 'qrcode.react'; // Import the QR Code component

const Home = () => {
  const [qrCodeData, setQrCodeData] = useState(null);
  const [qrCodeValidUntil, setQrCodeValidUntil] = useState(null);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  // Function to generate the QR code and make it valid for 3 hours
  const handleGenerateQRCode = () => {
    const currentTimestamp = Date.now(); // Get current time in milliseconds
    const expirationTimestamp = currentTimestamp + 3 * 60 * 60 * 1000; // Add 3 hours

    // Set QR code data with expiration timestamp
    setQrCodeData(`Valid until: ${new Date(expirationTimestamp).toLocaleString()}`);

    // Set the valid until timestamp (for demo purposes)
    setQrCodeValidUntil(new Date(expirationTimestamp).toLocaleString());
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

      <div className="lookup-section">
        <div className="lookup-card">
          <h2>Today Menu</h2>
          <p>Explore our variety-packed menu designed to make every meal exciting.</p>
          <button style={{ marginTop: '-10px' }}>View Menu</button>
        </div>
        <div className="lookup-card">
          <h2>Scan QR</h2>
          <p>Access services quickly by scanning our QR code.</p>
          <button 
            style={{ marginTop: '-10px' }} 
            onClick={handleGenerateQRCode}
          >
            Generate QR Code
          </button>

          {/* Display the QR code if it's generated */}
          {qrCodeData && (
            <div className="qr-code-container">
              <QRCode value={qrCodeData} size={256} />
              <p>QR Code Valid Until: {qrCodeValidUntil}</p>
            </div>
          )}
        </div>
        <div className="lookup-card">
          <h2>Contact Us</h2>
          <p>Have queries or feedback? We’d love to hear from you!</p>
          <button style={{ marginTop: '-10px' }}>Get in Touch</button>
        </div>
      </div>
    </div>
  );
};

export default Home;

