// Sidebar.js
import React from 'react';
import './styles/sidebar.css'; // Make sure the file name matches

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
      <button className="closebtn" onClick={toggleSidebar}>
        &times;
      </button>
      <a href="#home">Home</a>
      <a href="#search">Search</a>
      <a href="#about">About</a>
      {/* More links or content */}
    </div>
  );
};

export default Sidebar;
