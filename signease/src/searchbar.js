import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// Inside SearchBar.js

function SearchBar({ onSearch }) {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    const wordsArray = query.split(' ');
    onSearch(wordsArray);

    navigate('/learn');
  };

  return (
    <div className="searchContainer">
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                className="searchInput"
                placeholder="Search..."
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
