// components/Input.jsx
import { Link } from 'react-router-dom';

function Input() {
  return (
    <div className="input-container">
      <p className="welcome">Welcome to the Input Page</p>
      <input type="text" placeholder="Enter something..." />
      <br />
      <Link to="/">
        <button className="learn-button">Go Back</button>
      </Link>
    </div>
  );
}

export default Input;
