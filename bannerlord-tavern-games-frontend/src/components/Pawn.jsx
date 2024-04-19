import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { select } from '../features/puluc_board/pawnSlice';

export default function Pawn({ pawnStyleName, id }) {
  const pawnId = useSelector((state) => state.pawn.pawnId);
  const pawnColor = useSelector((state) => state.pawn.pawnColor);
  const dispatch = useDispatch();

  return (
    <button
      onClick={() => dispatch(select({ pawnId: id, pawnColor: pawnStyleName }))}
      className={pawnStyleName}>
      {id}
    </button>
  );
}

Pawn.propTypes = {
  pawnStyleName: PropTypes.string,
  id: PropTypes.number
};
