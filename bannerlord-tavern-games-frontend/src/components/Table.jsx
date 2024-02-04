import PropTypes from 'prop-types';

export default function Table({ children }) {
  return <div className="darkCornersOverlay">{children}</div>;
}

Table.propTypes = {
  children: PropTypes.any
};
