import PropTypes from 'prop-types';

export default function Pawn({ pawnStyleName, id }) {
  return <button className={pawnStyleName}>{id}</button>;
}

Pawn.propTypes = {
  pawnStyleName: PropTypes.string,
  id: PropTypes.number
};
