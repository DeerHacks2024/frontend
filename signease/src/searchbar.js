import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// Inside SearchBar.js

function SearchBar({ onSearch }) {
  const [query, setQuery] = useState('');
  const [postId, setPostId] = useState(null);
  const navigate = useNavigate();

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    try {
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ event: query })
      };
      const response = await fetch('https://deerhacks2024backend.vercel.app/insert', requestOptions);

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      setPostId(data.id);
      console.log('Event inserted successfully!', data);
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
