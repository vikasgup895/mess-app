import React, { useState, useEffect } from 'react';
import firstImage from './images/first.jpeg';
import secondImage from './images/second.jpeg';
import thirdImage from './images/third.jpeg';
import './Home.css';

const images = [
  { src: firstImage, alt: 'First slide' },
  { src: secondImage, alt: 'Second slide' },
  { src: thirdImage, alt: 'Third slide' },
];

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length); // Loop through images
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval); // Clean up interval on component unmount
  }, []);

  return (
    <div>
      {/* Welcome Section */}
      <section className="welcome-section">
        <div className="welcome-content">
          <h1>Welcome to ABES Engineering College Hostel Mess</h1>
          <p>Enjoy delicious and nutritious meals served fresh every day.</p>
        </div>
        <div className="slider">
          <div className="slides" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
            {images.map((image, index) => (
              <div className="slide" key={index}>
                <img src={image.src} alt={image.alt} className="slide-image" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Sections for Meal Plans, Today's Special, Feedback, etc. */}
      {/* Add the rest of your page sections here */}
    </div>
  );
};

export default Home;
