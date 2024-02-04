import PawnHolder from './PawnHolder';
import PropTypes from 'prop-types';

export default function StartingPoint({ id }) {
  const styleName = id === 'startingPointBlack' ? 'blackPawn' : 'whitePawn';

  return (
    <div className="startingPoint">
      <PawnHolder id={1} pawnStyleName={styleName} />
      <PawnHolder id={2} pawnStyleName={styleName} />
      <PawnHolder id={3} pawnStyleName={styleName} />
      <PawnHolder id={4} pawnStyleName={styleName} />
      <PawnHolder id={5} pawnStyleName={styleName} />
      <PawnHolder id={6} pawnStyleName={styleName} />
    </div>
  );
}

StartingPoint.propTypes = {
  id: PropTypes.string
};
