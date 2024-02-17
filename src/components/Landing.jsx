// components/Landing.jsx
import { Link } from 'react-router-dom';

function Landing() {
  return (
    <div className="landing-container">
      <p className="welcome">Welcome to the Landing Page</p>
      <Link to="/input">
        <button className='learn-button'>Learn</button>
      </Link>
    </div>
  );
}

export default Landing;
