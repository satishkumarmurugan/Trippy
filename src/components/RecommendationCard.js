import React, { useState } from 'react';
import './RecommendationCard.css';

const createGoogleMapLink = (location) => {
  if (!location) return ''; // Return empty string if location is undefined or empty
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(location)}`;
};

const randomImages = [
  '/images/image1.jpg',
  '/images/image2.jpg',
  '/images/image3.jpg',
  '/images/image4.jpg',
  '/images/image5.jpg',
  '/images/image6.jpg'
];

const getRandomImage = () => {
  return randomImages[Math.floor(Math.random() * randomImages.length)];
};

const RecommendationCard = ({ destination }) => {
  const mapLink = createGoogleMapLink(destination.place);
  const imageUrl = `/images/${destination.place.replace(/ /g, '_').replace(/,/g, '')}.jpg`;

  const [fallbackImage, setFallbackImage] = useState(null);

  const handleCheckout = () => {
    // Implement your checkout logic here, such as redirecting to a checkout page or showing a modal
    alert(`Checking out ${destination.place}`);
  };

  return (
    <div className="card">
      <a href={mapLink} target="_blank" rel="noopener noreferrer">
        <img
          src={fallbackImage || imageUrl}
          alt={destination.place}
          onError={(e) => {
            if (!fallbackImage) {
              e.target.onerror = null; // Prevents infinite loop if fallback also fails
              const randomImage = getRandomImage();
              setFallbackImage(randomImage);
              e.target.src = randomImage;
            }
          }}
        />
      </a>
      <div className="card-content">
        <h3>{destination.place}</h3>
        <p>{destination.description}</p>
        <p><strong>Type:</strong> {destination.type}</p>
        <p><strong>Budget:</strong> Rs. {destination.budget}</p>
      </div>
      <button className="checkout-button" onClick={handleCheckout}>Checkout</button>
    </div>
  );
};

export default RecommendationCard;
