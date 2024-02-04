import Pawn from './Pawn';
import PropTypes from 'prop-types';

export default function PawnHolder({ id, pawnStyleName }) {
  return (
    <div className="pawnHolder">
      <Pawn pawnStyleName={pawnStyleName} id={id} />
    </div>
  );
}

PawnHolder.propTypes = {
  id: PropTypes.number,
  pawnStyleName: PropTypes.string
};
