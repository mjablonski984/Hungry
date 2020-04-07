import React from 'react';
import './BusinessList.css';
import Business from '../Business/Business';

export default function BusinessList(props) {
  return (
    <div className="BusinessList">
      {props.businesses.map((business) => (
        <Business business={business} key={business.id} />
      ))}
    </div>
  );
}
