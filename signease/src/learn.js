import React from 'react';
import { useNavigate } from 'react-router-dom';

const Learn = () => {
  const navigate = useNavigate();

  return (
    <div>
      <button onClick={() => navigate('/')}
      style={{ position: 'absolute', top: '20px', left: '20px' }}>
      Home
      </button>
      <h1>Learn</h1>
      {/* Additional content for the Learn page */}
    </div>
  );
}

export default Learn;
