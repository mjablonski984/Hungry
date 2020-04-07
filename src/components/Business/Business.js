import React from 'react';
import './Business.css';

export default function Business(props) {
  const { business } = props;
  return (
    <div className="Business">
      <div className="image-container">
        <img src={business.imageSrc} alt={business.name} />
      </div>
      <h2>{business.name}</h2>
      <div className="Business-information">
        <div className="Business-address">
          <p>{business.address}</p>
          <p>{business.city}</p>
          <p>
            {business.state} {business.zipCode}
          </p>
          <p>{business.phone}</p>
        </div>
        <div className="Business-reviews">
          <h3>{business.category}</h3>
          <h3 className="rating">{business.rating}</h3>
          <p>{business.reviewCount}</p>
        </div>
      </div>
    </div>
  );
}
