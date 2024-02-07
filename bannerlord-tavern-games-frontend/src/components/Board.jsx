import Field from './Field';
import StartingPoint from './StartingPoint';
//require('../assets/pulucBoardBgHq.jpeg');
import textileBoardBg from '../assets/pulucBoardBgHq.jpeg';
import { useState } from 'react';
import Pawn from './Pawn';
import { initialPulucBoardState } from '../data/initialPulucBoardState';

export default function Board({ fieldSize, boardStyle }) {
  const [boardState, setBoardState] = useState(initialPulucBoardState);
  const [selectedPawn, setSelectedPawn] = useState(<></>);

  const handleSelectPawn = (id) => {
    setSelectedPawn(id);
  };

  const handleFieldClick = (e, fieldId, section) => {
    let oldBoard = boardState.map((row) => row.slice());
    oldBoard[fieldId][section - 1] = <Pawn pawnStyleName={'blackPawn'} id={1} />;
    setBoardState(oldBoard);
  };

  return (
    <div className={boardStyle}>
      <img className="backgroundImage" src={textileBoardBg} alt="puluc_textile_board_background" />
      <div className="overlayContent">
        <StartingPoint key="startingPointBlack" id="startingPointBlack" />
        <Field
          key="field1"
          id={1}
          onFieldClick={handleFieldClick}
          sizeX={fieldSize.x}
          sizeY={fieldSize.y}>
          {boardState}
        </Field>
        <Field
          key="field2"
          id={2}
          onFieldClick={handleFieldClick}
          sizeX={fieldSize.x}
          sizeY={fieldSize.y}>
          {boardState}
        </Field>
        <Field
          key="field3"
          id={3}
          onFieldClick={handleFieldClick}
          sizeX={fieldSize.x}
          sizeY={fieldSize.y}>
          {boardState}
        </Field>
        <Field
          key="field4"
          id={4}
          onFieldClick={handleFieldClick}
          sizeX={fieldSize.x}
          sizeY={fieldSize.y}>
          {boardState}
        </Field>
        <Field
          key="field5"
          id={5}
          onFieldClick={handleFieldClick}
          sizeX={fieldSize.x}
          sizeY={fieldSize.y}>
          {boardState}
        </Field>
        <Field
          key="field6"
          id={6}
          onFieldClick={handleFieldClick}
          sizeX={fieldSize.x}
          sizeY={fieldSize.y}>
          {boardState}
        </Field>
        <Field
          key="field7"
          id={7}
          onFieldClick={handleFieldClick}
          sizeX={fieldSize.x}
          sizeY={fieldSize.y}>
          {boardState}
        </Field>
        <Field
          key="field8"
          id={8}
          onFieldClick={handleFieldClick}
          sizeX={fieldSize.x}
          sizeY={fieldSize.y}>
          {boardState}
        </Field>
        <Field
          key="field9"
          id={9}
          onFieldClick={handleFieldClick}
          sizeX={fieldSize.x}
          sizeY={fieldSize.y}>
          {boardState}
        </Field>
        <Field
          key="field10"
          id={10}
          onFieldClick={handleFieldClick}
          sizeX={fieldSize.x}
          sizeY={fieldSize.y}>
          {boardState}
        </Field>
        <Field
          key="field11"
          id={11}
          onFieldClick={handleFieldClick}
          sizeX={fieldSize.x}
          sizeY={fieldSize.y}>
          {boardState}
        </Field>
        <StartingPoint key="startingPointWhite" id="startingPointWhite" />
      </div>
    </div>
  );
}
