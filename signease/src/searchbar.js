import React, { useState } from 'react';
// Inside SearchBar.js

function SearchBar({ onSearch }) {
  const [query, setQuery] = useState('');

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const wordsArray = query.split(' ');
    onSearch(wordsArray);
  };

  return (
    <div className="searchContainer">
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                className="searchInput"
                placeholder="Search..."
                // ...other props like value and onChange
                value={query} 
                onChange={handleChange}
            />
            <button type="submit" className="searchButton">
                Search
            </button>
        </form>
    </div>
  );
}

export default SearchBar;
