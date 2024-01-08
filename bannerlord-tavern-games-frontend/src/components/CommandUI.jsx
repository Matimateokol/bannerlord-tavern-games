export default function CommandUI() {
    return (
        <div className="commandUI" >
            <p>Your Turn</p>
            <div className="commandsContainer">
                <div className="diceRollCommand">
                    <p>-</p>
                    <button>Roll Dice</button>
                </div>
                <div className="infoEndCommand">
                    <button style={{ width: '100%'}}>How to Play</button>
                    <button style={{ width: '90%'}}>Forfeit</button>
                </div>
            </div>
        </div>
    );
}