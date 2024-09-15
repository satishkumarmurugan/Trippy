import React, { useState } from 'react';
import RecommendationCard from './RecommendationCard';
import './PlanStyle.css';
import destinations from './destinationsData'; // Import the destinations array

const TripForm = () => {
  const [formData, setFormData] = useState({
    destination: '',
    startDate: '',
    endDate: '',
    tripType: '',
    budget: '',
  });
  const [recommendations, setRecommendations] = useState([]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const recommendTrips = (formData) => {
    return destinations.filter(destination => 
      (formData.tripType ? destination.type === formData.tripType : true) &&
      (formData.budget ? destination.budget <= formData.budget : true)
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const recommendations = recommendTrips(formData);
    setRecommendations(recommendations);
    console.log('Form Data:', formData);
    console.log('Recommended Trips:', recommendations);
  };

  return (
    <div className="trip-form-container">
      <h2>Plan Your Next Adventure</h2>
      <p>Get started by filling out the form below:</p>
      <form onSubmit={handleSubmit}>
        <label>
          Destination
          <input
            type="text"
            name="destination"
            placeholder="Enter your Destination"
            value={formData.destination}
            onChange={handleChange}
          />
        </label>
        <div className="date-labels">
          <label>
            Start Date
            <input
              type="date"
              name="startDate"
              value={formData.startDate}
              onChange={handleChange}
            />
          </label>
          <label>
            End Date
            <input
              type="date"
              name="endDate"
              value={formData.endDate}
              onChange={handleChange}
            />
          </label>
        </div>
        <div className="date-labels">
          <label>
            Trip Type
            <select name="tripType" value={formData.tripType} onChange={handleChange}>
              <option value="">Select Type</option>
              <option value="Adventure">Adventure</option>
              <option value="Relaxation">Relaxation</option>
              <option value="Cultural">Cultural</option>
              <option value="Nature">Nature</option>
            </select>
          </label>
          <label>
            Budget
            <input
              type="number"
              name="budget"
              placeholder="Enter in Rs."
              value={formData.budget}
              onChange={handleChange}
            />
          </label>
        </div>
        <button type="submit">Search Trip</button>
      </form>
      <div className="recommendations">
        {recommendations.map((destination, index) => (
          <RecommendationCard key={index} destination={destination} />
        ))}
      </div>
    </div>
  );
};

export default TripForm;
