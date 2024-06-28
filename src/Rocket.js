// src/Rocket.js
import React from 'react';
import { useSpring, animated } from 'react-spring';
import './Rocket.css';

const Rocket = ({ direction }) => {
  const props = useSpring({
    from: direction === 'left' 
      ? { transform: 'translate(-50%, 100vh)' } 
      : { transform: 'translate(50%, 100vh)' },
    to: direction === 'left' 
      ? { transform: 'translate(50%, -100vh)' } 
      : { transform: 'translate(-50%, -100vh)' },
    config: { duration: 3000 },
  });

  return (
    <animated.div style={props} className="rocket">
      🚀
    </animated.div>
  );
};

export default Rocket;
