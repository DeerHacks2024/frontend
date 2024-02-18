import React, { useState } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Learn from './learn'; // Adjust the import if necessary
import LandingPage from './LandingPage';
import './styles/App.css'; // Ensure the CSS path is correct

const App = () => {
  // Moved the state and toggle function inside LandingPage since they're only used there now
  return (
    <Router>
      <div className="App" style={{ height: '100vh' }}>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/learn" element={<Learn />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
