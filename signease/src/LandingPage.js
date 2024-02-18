import React, { useState } from 'react';
import Sidebar from './sidebar'; // Make sure the path to Sidebar is correct
import SearchBar from './searchbar'; // Adjust the import if necessary
import './styles/App.css'; // Ensure the CSS path is correct
import './styles/landing.css'; // Ensure the CSS path is correct



const LandingPage = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
      setSidebarOpen(!sidebarOpen);
    };

    const handleSearch = (query) => {
      console.log('Searching for:', query);
      // Implement search logic here
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
          <SearchBar onSearch={handleSearch} />
          <button onClick={() => console.log('Surprise action triggered!')} className="surpriseMeButton">
            Surprise Me
          </button>
        </div>
        
      </>
    );
  };

  export default LandingPage;