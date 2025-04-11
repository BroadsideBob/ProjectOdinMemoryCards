import React from 'react';

function JokerSelection({ joker, onClick }) {
  if (!joker) return null;

  return (
    <div className="joker-card" onClick={() => onClick(joker.id)}>
      <img src={joker.image} alt={joker.name} />
    </div>
  );
}

export default JokerSelection;