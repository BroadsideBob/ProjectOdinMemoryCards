import React from 'react';

function Scoreboard({ currentScore, bestScore }) {
  return (
    <div className="scoreboard"> 
      <h2>Scoreboard</h2> 
      <p>Current Score: {currentScore}</p> 
      <p>Best Score: {bestScore}</p> 
    </div>
  );
}

export default Scoreboard; 