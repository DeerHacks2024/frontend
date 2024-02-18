import { useNavigate, useLocation } from 'react-router-dom';
import React, { useEffect, useRef } from 'react';
// import './styles/learn.css';

const Learn = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const query = location.state?.query;
  const videoRef = useRef(null);

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
      style={{ position: 'absolute', top: '20px', left: '20px', background: 'none', fontSize: '54px', border: 'none' }}>
      🏠
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
            <div className='sentence-text'>
            <p>{query}</p>
            </div>
          </div>
          
        </div>
    </div>
      {/* Additional content for the Learn page */}
    </div>
  );
}

export default Learn;
