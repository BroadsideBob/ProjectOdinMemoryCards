import React from 'react';
import JokerSelection from './JokerSelection.jsx'; 

function Box({ jokerList, onCardClick }) {
  return (
    <div className="card-grid"> 
      {jokerList.map((joker) => (
        <JokerSelection key={joker.id} joker={joker} onClick={onCardClick} />
      ))}
    </div>
  );
}

export default Box; 