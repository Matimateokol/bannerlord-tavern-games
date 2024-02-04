import { useState } from 'react';
import Board from './Board';
import CommandUI from './CommandUI';
import DicesBox from './DicesBox';
import { rollDice } from '../handlers/rollDice';
import Dices from './Dices';

export default function PulucGame() {
  const [diceRoll, setDiceRoll] = useState('-');
  const [rolledDices, setRolledDices] = useState(<></>);

  const handleDiceRoll = () => {
    const rollOutput = rollDice(1, 5);
    setDiceRoll(`${rollOutput}`);
    setRolledDices(
      <>
        <Dices rolledNumber={rollOutput} />
      </>
    );
  };

  return (
    <>
      <DicesBox>{rolledDices}</DicesBox>
      <Board boardStyle="pulucBoard" fieldSize={{ x: '20vw', y: '3vw' }} />
      <CommandUI onDiceRoll={handleDiceRoll} diceRoll={diceRoll} />
    </>
  );
}
