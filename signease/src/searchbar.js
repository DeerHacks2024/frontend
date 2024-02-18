import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Inside SearchBar.js
// ...
function SearchBar({ onSearch, surpriseData }) {
  const [query, setQuery] = useState('');
  const [postId, setPostId] = useState(null);
  const navigate = useNavigate();

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    try {
      // ...
    } catch (error) {
      console.error('Error inserting event:', error);
    }

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
                placeholder={surpriseData ? `${surpriseData}` : "Search..."}
                value={query} 
                onChange={handleChange}
            />
            <button type="submit" className="searchButton">
              🔍
            </button>
        </form>
    </div>
  );
}

export default SearchBar;

