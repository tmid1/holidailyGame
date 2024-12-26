"use client";

import React from 'react';

const Snowfall = () => {
  // Create 50 snowflakes
  const snowflakes = Array.from({ length: 50 }, (_, i) => i);

  return (
    <div className="snowfall-container fixed inset-0 pointer-events-none">
      {snowflakes.map((_, i) => {
        const animationDuration = 5 + Math.random() * 5; // Random duration between 5-10s
        const initialDelay = Math.random() * 2; // Random delay between 0-2s
        const initialPosition = Math.random() * 100; // Random start position

        return (
          <div
            key={i}
            className="snowflake absolute text-white"
            style={{
              left: `${initialPosition}vw`,
              animation: `fall ${animationDuration}s linear ${initialDelay}s infinite`,
              fontSize: `${Math.random() * 20 + 20}px`, // Random size between 10-30px
              opacity:1, // Random opacity between 0.3-1
              textShadow: '0 0 3px black', // Multiple shadows for stronger outline
              color:'white'
            }}
          >
            ❄
          </div>
        );
      })}
    </div>
  );
};

export default Snowfall;