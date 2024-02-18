// Sidebar.js
import React, { useState, useEffect } from 'react';
import './styles/goodsidebar.css'; // Make sure the file name matches
import './styles/goodsidebar.css'; // Make sure the file name matches

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch('https://deerhacks2024backend.vercel.app/retrieve')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        console.log('Data retrieved successfully:', data);
        const allEvents = data.data.flatMap((item) =>
          item.event ? item.event : item.data
        );
        setEvents(allEvents); // Extracting all event texts
      })
      .catch((error) => {
        console.error('There was a problem with the fetch operation:', error);
      });
  }, []); // Empty dependency array to run the effect only once

  const handleButtonClick = (event) => {
    const sectionId = event.toLowerCase().replace(/\s/g, '-');
    const section = document.getElementById(sectionId);
    section?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
      <button className="closebtn" onClick={toggleSidebar}>
        &times;
      </button>
      <div className="history-top">
        <h2 className="history-text">History</h2>
      </div>
      <div className="button-container">
        {events
          .filter((event) => event != null) // This removes any null or undefined events
          .map((event, index) => (
            <button
              key={index}
              className="sidebuttons"
              onClick={() => handleButtonClick(event)}
            >
              {event}
            </button>
          ))}
      </div>
    </div>
  );
};

export default Sidebar;
