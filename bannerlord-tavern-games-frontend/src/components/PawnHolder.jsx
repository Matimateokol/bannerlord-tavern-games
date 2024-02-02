import Pawn from './Pawn';
export default function PawnHolder({ pawnSize, id, pawnStyleName }) {
  return (
    <div className="pawnHolder">
      {/* <button>{id}</button> */}
      <Pawn pawnStyleName={pawnStyleName} id={id} />
    </div>
  );
}
