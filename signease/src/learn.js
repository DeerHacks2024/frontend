import { useNavigate, useLocation } from 'react-router-dom';
import React, { useState, useEffect, useRef } from 'react';
import { FaHome } from 'react-icons/fa';
// import './styles/learn.css';

const Learn = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const query = location.state?.query;
  const videoRef = useRef(null);
  const words = query.split(' '); // Split the query into words
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + words.length) % words.length);
  };

  useEffect(() => {
    // Function to start the camera stream
    const startVideo = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      } catch (err) {
        console.error("Error accessing the camera", err);
      }
    };
    startVideo();
    // Cleanup function to stop the video stream when the component unmounts
    return () => {
      if (videoRef.current && videoRef.current.srcObject) {
        videoRef.current.srcObject.getTracks().forEach(track => track.stop());
      }
    };
  }, []);

  return (
    <div>
      <button onClick={() => navigate('/')}
      style={{ position: 'absolute', top: '20px', left: '20px', background: 'none', fontSize: '54px', border: 'none', color: 'white', cursor: 'pointer' }}>
      <FaHome size={50} />
      </button>
      <div className="learnContainer">
        <div className="half leftBox">
          <h2>Left Box</h2>
          {/* Content for the left box */}
        </div>
        <div className="half rightBox">
          {/* <h2>Right Box</h2> */}
          {/* Content for the right box */}
          <div className='right-container'>
            <div className="videoContainer">
              <video ref={videoRef} autoPlay playsInline style={{ width: '100%', height: 'auto', transform: 'scaleX(-1)' }}></video>
            </div>
            <div className='sentence-text' style={{display: 'flex', fontSize: '25px', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center'}}>
              {words.map((word, index) => (
                <span key={index} style={{backgroundColor: index === currentIndex ? 'yellow' : 'transparent', marginRight: '5px', color: 'black'}}>
                  {word}{' '}
                </span>
              ))}
            </div>
            <div className="button-container" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', gap: '10px', marginTop: '10px', height: '30px' }}>
              <button onClick={handlePrevious}>previous</button>
              <button onClick={handleNext}>next</button>
            </div>
          </div>
        </div>
    </div>
      {/* Additional content for the Learn page */}
    </div>
  );
}

export default Learn;
