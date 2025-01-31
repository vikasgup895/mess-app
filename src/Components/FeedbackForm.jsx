import React, { useState } from 'react';
import './FeedbackForm.css';
import image from './Image/tick.png';

const FeedbackForm = ({ closePopup }) => {
  const [formData, setFormData] = useState({
    name: '',
    admissionNo: '',
    roomNo: '',
    foodQuality: 'excellent',
    taste: 'excellent',
    variety: 'excellent',
    cleanliness: 'excellent',
    suggestions: '',
  });

  const [isThankYouVisible, setIsThankYouVisible] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsThankYouVisible(true);
    setTimeout(() => {
      setIsThankYouVisible(false);
      closePopup(); 
    }, 5000);
  };

  const handleThankYouClose = () => {
    setIsThankYouVisible(false);
  };

  return (
    <div className="popup">
      <div className="popup-content">
        {/* Close Button */}
        <button className="close-popup-btn" onClick={closePopup}>×</button>
        
        <h1 className="form-title">Hostel Mess Food Feedback</h1>
        <form className="feedback-form" onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="name">Your Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              required
            />
          </div>

          <div className="input-group">
            <label htmlFor="admissionNo">Admission Number:</label>
            <input
              type="text"
              id="admissionNo"
              name="admissionNo"
              value={formData.admissionNo}
              onChange={handleChange}
              placeholder="Enter your admission number"
              required
            />
          </div>

          <div className="input-group">
            <label htmlFor="roomNo">Room Number:</label>
            <input
              type="text"
              id="roomNo"
              name="roomNo"
              value={formData.roomNo}
              onChange={handleChange}
              placeholder="Enter your room number"
              required
            />
          </div>

          <div className="input-group"> 
            <label htmlFor="foodQuality">Food Quality:</label>
            <select id="foodQuality" name="foodQuality" value={formData.foodQuality} onChange={handleChange}>
              <option value="excellent">Excellent</option>
              <option value="good">Good</option>
              <option value="average">Average</option>
              <option value="poor">Poor</option>
            </select>
          </div>

          <div className="input-group"> 
            <label htmlFor="taste">Taste of food</label>
            <select id="taste" name="taste" value={formData.taste} onChange={handleChange}>
              <option value="excellent">Excellent</option>
              <option value="good">Good</option>
              <option value="average">Average</option>
              <option value="poor">Poor</option>
            </select>
          </div>

          <div className="input-group">
            <label htmlFor="variety">Cleanliness of Mess</label>
            <select id="variety" name="variety" value={formData.variety} onChange={handleChange}>
              <option value="excellent">Excellent</option>
              <option value="good">Good</option>
              <option value="average">Average</option>
              <option value="poor">Poor</option>
            </select>
          </div>

          <div className="input-group">
            <label htmlFor="suggestions">Suggestions:</label>
            <textarea id="suggestions" name="suggestions" value={formData.suggestions} onChange={handleChange} placeholder="Any suggestions?" rows="4"></textarea>
          </div>

          <button type="submit" className="submit-btn">Submit Feedback</button>
        </form>
      </div>

      {/* Thank You Popup */}
      {isThankYouVisible && (
        <div className="thank-you-popup">
          <div className="thank-you-content">
            <img src={image} alt="Thank You" />
            <h2>Thank You!</h2>
            <p>Your feedback has been submitted successfully.</p>
            <button onClick={handleThankYouClose}>OK</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default FeedbackForm;
