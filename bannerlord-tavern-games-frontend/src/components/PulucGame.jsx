import Board from './Board';
import CommandUI from './CommandUI';
import DicesBox from './DicesBox';

export default function PulucGame() {

    return (
        <>        
            <DicesBox />
            <Board boardStyle='pulucBoard' fieldSize={{ x: 300, y: 50 }} />
            <CommandUI />
        </>
    );
}