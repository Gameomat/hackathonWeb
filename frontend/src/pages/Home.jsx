import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/button';
import Navbar from '../components/Navbar';
import '../styles/Home.css';

const Home = () => {
  const navigate = useNavigate();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Trigger fade-up animations on mount
    setIsLoaded(true);
  }, []);

  const handleEnter = () => {
    navigate('/poster');
  };

  return (
    <div className="home-container">
      <Navbar />
      <div className="background-overlay"></div>
      
      <div className="content-wrapper">
        {/* 50th Anniversary Badge */}
        
        <h1 className={`university-name ${isLoaded ? 'fade-up-2' : 'hidden'}`}>
          PRESIDENCY UNIVERSITY
        </h1>
        {/* University Name */}
        <h2 className={`university-name ${isLoaded ? 'fade-up-2' : 'hidden'}`}>
          SCHOOL OF COMPUTER SCIENCE AND ENGINEERING
        </h2>

        {/* Welcomes Text */}
        <h2 className={`welcomes-text ${isLoaded ? 'fade-up-3' : 'hidden'}`}>
          ORGANIZING
        </h2>

        {/* Event Description */}
        <div className={`event-description ${isLoaded ? 'fade-up-4' : 'hidden'}`}>
          <h3 className="event-title">FusionX Hackathon 2026</h3>
          <p className="event-subtitle">
            A 24-Hour National Hackathon on Emerging Technologies
          </p>
          <p className="event-organizer">
            10th and 11th APRIL 2026
          </p>
        </div>

        {/* Enter Button */}
        <div className={`enter-button-wrapper ${isLoaded ? 'fade-up-5' : 'hidden'}`}>
          <Button 
            onClick={handleEnter}
            className="enter-button"
            size="lg"
          >
            RELEASE POSTER
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Home;
