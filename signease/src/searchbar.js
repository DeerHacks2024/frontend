import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

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
      const response = await fetch(
        'https://deerhacks2024backend.vercel.app/insert',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ event: query }), // Sending the input text as the event
        }
      );

      if (!response.ok) {
        throw new Error('Failed to insert event');
      }

      // If the insertion is successful, log the response
      const data = await response.json();
      console.log('Event inserted successfully:', data);
    } catch (error) {
      console.error('Error inserting event:', error);
    }

    const wordsArray = query.split(' ');
    onSearch(wordsArray);

    navigate('/learn', { state: { query } });
  };

  return (
    <div className="searchContainer">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="searchInput"
          placeholder={surpriseData ? `${surpriseData}` : 'Search...'}
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
