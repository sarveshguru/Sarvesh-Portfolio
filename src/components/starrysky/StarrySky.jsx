// StarryNight.jsx
import React from 'react';
import './StarrySky.css';

const StarryNight = () => {
  const numStars = 500;

  const createStars = () => {
    const stars = [];

    for (let i = 0; i < numStars; i++) {
      const x = Math.random() * 100;
      const y = Math.random() * 300;
      const size = Math.random() * 1.5 + 0.5;
      const delay = Math.random() * 2;

      stars.push(
        <circle
          key={i}
          cx={`${x}vw`}
          cy={`${y}vh`}
          r={size}
          className="star"
          style={{ animationDelay: `-${delay}s` }}
        />
      );
    }

    return stars;
  };

  return (
    <div className='star-svg'>
      <svg xmlns="http://www.w3.org/2000/svg">
        {createStars()}
      </svg>
    </div>
  );
};

export default StarryNight;
