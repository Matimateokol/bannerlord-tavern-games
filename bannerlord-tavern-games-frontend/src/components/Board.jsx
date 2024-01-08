import Field from './Field'
import StartingPoint from './StartingPoint';
//require('../assets/pulucBoardBgHq.jpeg');
import textileBoardBg from '../assets/pulucBoardBgHq.jpeg';

export default function Board({ fieldSize, boardStyle }) {

    return (
        <div className={boardStyle}>
            <img className='backgroundImage' src={textileBoardBg} alt="puluc_textile_board_background" />
            <div className='overlayContent'>
                <StartingPoint key="startingPointBlack" id="startingPointBlack" />
                <Field key="field1" id={1} sizeX={fieldSize.x} sizeY={fieldSize.y} />
                <Field key="field2" id={2} sizeX={fieldSize.x} sizeY={fieldSize.y} />
                <Field key="field3" id={3} sizeX={fieldSize.x} sizeY={fieldSize.y} />
                <Field key="field4" id={4} sizeX={fieldSize.x} sizeY={fieldSize.y} />
                <Field key="field5" id={5} sizeX={fieldSize.x} sizeY={fieldSize.y} />
                <Field key="field6" id={6} sizeX={fieldSize.x} sizeY={fieldSize.y} />
                <Field key="field7" id={7} sizeX={fieldSize.x} sizeY={fieldSize.y} />
                <Field key="field8" id={8} sizeX={fieldSize.x} sizeY={fieldSize.y} />
                <Field key="field9" id={9} sizeX={fieldSize.x} sizeY={fieldSize.y} />
                <Field key="field10" id={10} sizeX={fieldSize.x} sizeY={fieldSize.y} />
                <Field key="field11" id={11} sizeX={fieldSize.x} sizeY={fieldSize.y} />
                <StartingPoint key="startingPointWhite" id="startingPointWhite" />
            </div>
        </div>
    ); 
}