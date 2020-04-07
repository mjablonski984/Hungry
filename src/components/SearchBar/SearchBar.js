import React, { useState } from 'react';
import './SearchBar.css';

export default function SearchBar(props) {
  const [state, setState] = useState({
    term: '',
    location: '',
    sortBy: 'best_match'
  });

  const sortByOptions = {
    'Best Match': 'best_match',
    'Highest Rated': 'rating',
    'Most Reviewed': 'review_count'
  };

  const getSortByClass = (sortByOption) => {
    return sortByOption === state.sortBy ? 'active' : '';
  };

  const handleSortByChange = (sortByOption) => {
    setState({ ...state, sortBy: sortByOption });
  };

  const handleInputChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleSearch = (e) => {
    if (state.location === '' || (state.term === '' && state.location === '')) return;

    props.searchYelp(state.term, state.location, state.sortBy);
    e.preventDefault();
  };

  const renderSortByOptions = () => {
    return Object.keys(sortByOptions).map((sortByOption) => {
      let sortByOptionValue = sortByOptions[sortByOption];
      return (
        <li
          key={sortByOptionValue}
          className={getSortByClass(sortByOptionValue)}
          onClick={handleSortByChange.bind(this, sortByOptionValue)}
        >
          {sortByOption}
        </li>
      );
    });
  };

  return (
    <div className="SearchBar">
      <div className="SearchBar-sort-options">
        <ul>{renderSortByOptions()}</ul>
      </div>
      <div className="SearchBar-fields">
        <input name="term" onChange={handleInputChange} placeholder="Search Businesses" />
        <input name="location" onChange={handleInputChange} placeholder="Where?" />
      </div>
      <div className="SearchBar-submit">
        <a href="www.#.com" onClick={handleSearch}>
          Let's Go
        </a>
      </div>
    </div>
  );
}
