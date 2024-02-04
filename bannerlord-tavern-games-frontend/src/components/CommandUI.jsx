import { useState } from 'react';

export default function CommandUI({ diceRoll, onDiceRoll }) {
  return (
    <div className="commandUI">
      <p>Your Turn</p>
      <div className="commandsContainer">
        <div className="diceRollCommand">
          <p>{diceRoll}</p>
          <button onClick={onDiceRoll}>Roll Dice</button>
        </div>
        <div className="infoEndCommand">
          <button style={{ width: '100%' }}>How to Play</button>
          <button style={{ width: '90%' }}>Forfeit</button>
        </div>
      </div>
    </div>
  );
}
