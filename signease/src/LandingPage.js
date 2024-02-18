import React, { useState } from 'react';
import Sidebar from './sidebar'; // Make sure the path to Sidebar is correct
import SearchBar from './searchbar'; // Adjust the import if necessary
import './styles/App.css'; // Ensure the CSS path is correct
import './styles/landing.css'; // Ensure the CSS path is correct

const LandingPage = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [surpriseData, setSurpriseData] = useState(null); // State to hold surprise data

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleSearch = (query) => {
    console.log('Searching for:', query);
    // Implement search logic here
  };

  const handleSurpriseButtonClick = () => {
    fetch("https://deerhacks2024backend.vercel.app/randomize")
      .then(response => response.json())
      .then(data => {
        console.log(data["data"]);
        setSurpriseData(data["data"]); // Set the surprise data in state
      })
      .catch(error => {
        console.error("Error fetching data:", error);
      });
  };

  return (
    <>
      <div className='landing-container'>
        <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
        <button
          className={`sidebarToggle ${sidebarOpen ? 'hideArrow' : ''}`}
          onClick={toggleSidebar}
        >
          {/* Button content */}
        </button>
        <h1>SignEase</h1>
        <SearchBar onSearch={handleSearch} surpriseData={surpriseData} /> {/* Pass surpriseData to SearchBar */}
        <button onClick={handleSurpriseButtonClick} className="surpriseMeButton">
          Surprise Me
        </button>
      </div>
    </>
  );
};

export default LandingPage;