// Sidebar.js
import React, { useState, useEffect } from 'react';
import './styles/sidebar.css'; // Make sure the file name matches

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch('https://deerhacks2024backend.vercel.app/retrieve')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        console.log('Data retrieved successfully:', data);
        const allEvents = data.data.flatMap(item => item.event ? item.event : item.data);
        setEvents(allEvents); // Extracting all event texts
      })
      .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
      });
  }, []); // Empty dependency array to run the effect only once

  return (
    <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
      <button className="closebtn" onClick={toggleSidebar}>
        &times;
      </button>

      {events.map((event, index) => (
        <a key={index} href={`#${event.toLowerCase().replace(/\s/g, '-')}`}>
          {event}
        </a>
      ))}
    </div>
  );
};

export default Sidebar;
