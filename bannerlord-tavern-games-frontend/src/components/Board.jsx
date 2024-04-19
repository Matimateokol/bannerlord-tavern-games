import Field from './Field';
import StartingPoint from './StartingPoint';
import textileBoardBg from '../assets/pulucBoardBgHq.jpeg';
import { useState } from 'react';
import Pawn from './Pawn';
import { initialPulucBoardState } from '../data/initialPulucBoardState';
import { useDispatch, useSelector } from 'react-redux';
import { movePawn } from '../features/puluc_board/boardSlice';
import { number, object, string } from 'prop-types';

export default function Board({ fieldSize, boardStyle }) {
  const field = useSelector((state) => state.board.value[0][0]);
  const pawnId = useSelector((state) => state.pawn.pawnId);
  const pawnColor = useSelector((state) => state.pawn.pawnColor);
  const dispatch = useDispatch();

  const [boardState, setBoardState] = useState(initialPulucBoardState);
  const [selectedPawn, setSelectedPawn] = useState({
    row: 0,
    col: 0,
    pawn: <Pawn pawnStyleName={'blackPawn'} id={1} />
  });

  const fields = Array();

  const handlePawnSelect = (e, id) => {
    console.log('A pawn has been clicked!');
    setSelectedPawn(id);
  };

  const handleFieldClick = (e, fieldId) => {
    let oldBoard = boardState.map((row) => row.slice());

    // logic for determining where to put the pawn:
    if (oldBoard[fieldId][0] !== null || oldBoard[fieldId][1] !== null) {
      oldBoard[fieldId][0] = <Pawn pawnStyleName={pawnColor} id={pawnId} />;
    }
    setBoardState(oldBoard);
  };

  for (let i = 1; i < 12; i++) {
    const key = 'field' + i;
    fields.push(
      <Field
        key={key}
        id={i}
        onFieldClick={(e) => {
          console.log('A field has been clicked!');
          handleFieldClick(e.target, i);
          // dispatch(movePawn(selectedPawn, oldRow, oldCol, newRow, newCol))}
        }}
        onPawnSelect={handlePawnSelect}
        sizeX={fieldSize.x}
        sizeY={fieldSize.y}>
        {boardState}
      </Field>
    );
  }

  return (
    <div className={boardStyle}>
      <img className="backgroundImage" src={textileBoardBg} alt="puluc_textile_board_background" />
      <div className="overlayContent">
        <StartingPoint
          key="startingPointBlack"
          id="startingPointBlack"
          onPawnSelect={handlePawnSelect}
        />
        {fields}
        <StartingPoint
          key="startingPointWhite"
          id="startingPointWhite"
          onPawnSelect={handlePawnSelect}
        />
      </div>
    </div>
  );
}

Board.propTypes = {
  fieldSize: object,
  boardStyle: string
};
