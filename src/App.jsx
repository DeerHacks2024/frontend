// App.jsx
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Landing from './components/Landing';
import Input from './components/Input';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/input" element={<Input />} />
      </Routes>
    </Router>
  );
}

export default App;
