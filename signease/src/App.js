import React, { useState } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Sidebar from './sidebar'; // Make sure the path to Sidebar is correct
import SearchBar from './searchbar'; // Adjust the import if necessary
import Learn from './learn'; // Adjust the import if necessary
import './styles/App.css'; // Ensure the CSS path is correct


const App = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleSearch = (query) => {
    console.log('Searching for:', query);
    // Implement search logic here
  };

  return (
    <Router>
      <div className="App">
        <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
        <button
          className={`sidebarToggle ${sidebarOpen ? 'hideArrow' : ''}`}
          onClick={toggleSidebar}
        >
          {/* Button content */}
        </button>
        <div className={`main ${sidebarOpen ? 'shifted' : ''}`} style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100vh',
        }}>
          <Routes>
            <Route path="/" element={
              <>
                <h1>SignEase</h1>
                <SearchBar onSearch={handleSearch} />
                <button onClick={() => console.log('Surprise action triggered!')} className="surpriseMeButton">
                  Surprise Me
                </button>
              </>
            } />
            <Route path="/learn" element={<Learn />} />
            {/* <Route path="/" element={<h1>Home Page</h1>} />
            <Route path="/learn" element={<h1>Learn Page</h1>} /> */}
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
