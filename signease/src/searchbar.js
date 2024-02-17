import React, { useState } from 'react';
// Inside SearchBar.js

function SearchBar({ onSearch }) {
  const [query, setQuery] = useState('');
  const [postId, setPostId] = useState(null);

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // try {
    //   await axios.post('/api/sentences', { sentence: query });
    //   console.log('Sentence submitted successfully!');
    // } catch (error) {
    //   console.error('Error submitting sentence:', error);
    // }
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title: query })
    };
    fetch('http://127.0.0.1:5000/api/sentences', requestOptions)
      .then(response => {
        if (!response.ok) {
          // Throw an error if the response is not ok to handle it in the catch block
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        // Assuming your API returns an object with an ID, adjust accordingly
        setPostId(data.id); // Update the state with the new ID
        console.log('Sentence submitted successfully!', data);
      })
      .catch(error => {
        console.error('Error submitting sentence:', error);
      });


    const wordsArray = query.split(' ');
    onSearch(wordsArray);

    // const postData = {
    //     sentence: query
    // };

    // const requestOptions = {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json' // Specify the content type if sending JSON data
    //     },
    //     body: JSON.stringify(postData) // Convert the data to JSON format
    //   };

      // Make the POST request
    // fetch('https://deerhacks2024backend.vercel.app/insert', requestOptions)
    //     .then(response => {
    //     if (!response.ok) {
    //         throw new Error('Network response was not ok');
    //     }
    //     return response.json();
    //     })
    //     .then(data => {
    //     console.log(data); // Work with the response data here
    //     })
    //     .catch(error => {
    //     console.error('Fetch error:', error);
    //     });
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
        {postId && <p>Post ID: {postId}</p>}
    </div>
  );
}

export default SearchBar;
