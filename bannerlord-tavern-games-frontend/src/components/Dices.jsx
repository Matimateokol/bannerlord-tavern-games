import Rectangle from "./shapes/Rectangle";
import { diceLayoutVariants, diceColorVariants } from "../handlers/diceLayoutAndColorVariants";
import { rollDice } from "../handlers/rollDice";

export default function Dices({ rolledNumber }) {
    // TODO: make remembering the previous roll and avoid repeating the same layout twice in a row
    const randomizedLayoutIndex = rollDice(0, diceLayoutVariants.length - 1);

    let randomizedLetter = 'A';
    
    if (rolledNumber > 3) {
        randomizedLetter = 'A';
    } else {
        let randomizedColorLetterIndex = rollDice(0, 2);

        if(randomizedColorLetterIndex == 2) {
            randomizedLetter = 'C';
        } else if(randomizedColorLetterIndex == 1) {
            randomizedLetter = 'B';
        } else {
            randomizedLetter = 'A';
        }
    }

    const layout = diceLayoutVariants[randomizedLayoutIndex];
    const colors = diceColorVariants[rolledNumber];

    return(
        <>
            <Rectangle 
                height='6vw'
                width='2vw' 
                color={colors[randomizedLetter][0]}
                transform={`translate(${layout[0]}%, ${layout[1]}%) rotate(${layout[2]}deg)`}
            />
            <Rectangle 
                height='6vw' 
                width='2vw' 
                color={colors[randomizedLetter][1]}
                transform={`translate(${layout[3]}%, ${layout[4]}%) rotate(${layout[5]}deg)`}
            />
            <Rectangle 
                height='6vw' 
                width='2vw' 
                color={colors[randomizedLetter][2]}
                transform={`translate(${layout[6]}%, ${layout[7]}%) rotate(${layout[8]}deg)`}
            />
            <Rectangle 
                height='6vw' 
                width='2vw' 
                color={colors[randomizedLetter][3]}
                transform={`translate(${layout[9]}%, ${layout[10]}%) rotate(${layout[11]}deg)`}
            />                                                
        </>
    );
}