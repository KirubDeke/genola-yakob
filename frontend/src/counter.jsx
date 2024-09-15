import React, { useEffect } from 'react';
import './style/counter.css'; // Import your CSS file
import $ from 'jquery'; // Import jQuery

const counting = () => {
  useEffect(() => {
    // Ensure the counterUp plugin is available
    if ($.fn.counterUp) {
      $('.counter').counterUp({
        delay: 10,
        time: 1200,
      });
    }
  }, []);

  return (
    <div>
      <div className="section"></div>
      <div className="counter-up">
        <div className="content">
          <div className="box">
            <div className="icon"><i className="fas fa-history"></i></div>
            <div className="counter">10</div>
            <div className="text">Years of Experience</div>
          </div>
          <div className="box">
            <div className="icon"><i className="fas fa-gift"></i></div>
            <div className="counter">508</div>
            <div className="text">Completed Projects</div>
          </div>
          <div className="box">
            <div className="icon"><i className="fas fa-users"></i></div>
            <div className="counter">436</div>
            <div className="text">Happy Clients</div>
          </div>
          <div className="box">
            <div className="icon"><i className="fas fa-award"></i></div>
            <div className="counter">5</div>
            <div className="text">Awards Received</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default counting;