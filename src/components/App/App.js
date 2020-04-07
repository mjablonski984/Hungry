import React, { useState } from 'react';
import './App.css';
import BusinessList from '../BusinessList/BusinessList';
import SearchBar from '../SearchBar/SearchBar';
import Footer from '../Footer/Footer';
import Yelp from '../../util/Yelp';

export default function App() {
  const [businesses, setBusinesses] = useState([]);

  const searchYelp = (term, location, sortBy) => {
    Yelp.search(term, location, sortBy).then((businesses) => setBusinesses(businesses));
  };

  return (
    <div className="App">
      <h1>hungry?</h1>
      <SearchBar searchYelp={searchYelp} />
      <BusinessList businesses={businesses} />
      <Footer />
    </div>
  );
}
