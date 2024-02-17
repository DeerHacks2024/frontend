import React, { useState } from 'react';
import Sidebar from './sidebar'; // Make sure the path to Sidebar is correct
import SearchBar from './searchbar'; // Make sure the path to SearchBar is correct
import './App.css'; // Assuming you're using CSS for styling

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleSearch = (query) => {
    console.log('Searching for:', query);
    // Here, you would typically handle the search operation, like calling an API
  };

  const handleSurpriseMe = () => {
    console.log('Surprise action triggered!');
    // Implement your surprise action here, e.g., set a random search query
  };

  return (
    <div className="App" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
      <Sidebar />
      <div className="main" style={{ marginLeft: '250px' }}></div>
      <button
  className={`sidebarToggle ${sidebarOpen ? 'hideArrow' : ''}`}
  onClick={toggleSidebar}
>
  {/* The button content can be empty if you're using ::before for the arrow */}
</button>
      <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      <div className={`main ${sidebarOpen ? 'shifted' : ''}`}></div>
      <h1>SignEase</h1>
      <SearchBar onSearch={handleSearch} />
      <button onClick={handleSurpriseMe} className="surpriseMeButton">
        Surprise Me
      </button>
    </div>
  );
}

export default App;
