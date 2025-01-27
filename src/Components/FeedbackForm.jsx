import React, { useState } from 'react';
import './FeedbackForm.css';

const FeedbackForm = () => {
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Feedback submitted successfully!');
    setFormData({
      name: '',
      admissionNo: '',
      roomNo: '',
      foodQuality: 'excellent',
      taste: 'excellent',
      variety: 'excellent',
      cleanliness: 'excellent',
      suggestions: '',
    });
  };

  return (
    <div className="main-content">
    <div className="feedback-container">
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
          <label htmlFor="admissionNo">admission Number:</label>
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
          <select
            id="foodQuality"
            name="foodQuality"
            value={formData.foodQuality}
            onChange={handleChange}
          >
            <option value="excellent">Excellent</option>
            <option value="good">Good</option>
            <option value="average">Average</option>
            <option value="poor">Poor</option>
          </select>
        </div>

        <div className="input-group">
          <label htmlFor="taste">Taste of Food:</label>
          <select
            id="taste"
            name="taste"
            value={formData.taste}
            onChange={handleChange}
          >
            <option value="excellent">Excellent</option>
            <option value="good">Good</option>
            <option value="average">Average</option>
            <option value="poor">Poor</option>
          </select>
        </div>

        <div className="input-group">
          <label htmlFor="variety">Variety of Food:</label>
          <select
            id="variety"
            name="variety"
            value={formData.variety}
            onChange={handleChange}
          >
            <option value="excellent">Excellent</option>
            <option value="good">Good</option>
            <option value="average">Average</option>
            <option value="poor">Poor</option>
          </select>
        </div>

        <div className="input-group">
          <label htmlFor="cleanliness">Cleanliness of Mess:</label>
          <select
            id="cleanliness"
            name="cleanliness"
            value={formData.cleanliness}
            onChange={handleChange}
          >
            <option value="excellent">Excellent</option>
            <option value="good">Good</option>
            <option value="average">Average</option>
            <option value="poor">Poor</option>
          </select>
        </div>

        <div className="input-group">
          <label htmlFor="suggestions">Suggestions:</label>
          <textarea
            id="suggestions"
            name="suggestions"
            value={formData.suggestions}
            onChange={handleChange}
            placeholder="Any suggestions?"
            rows="4"
          ></textarea>
        </div>

        <button type="submit" className="submit-btn">
          Submit Feedback
        </button>
      </form>
    </div>
    </div>
  );
};

export default FeedbackForm;
