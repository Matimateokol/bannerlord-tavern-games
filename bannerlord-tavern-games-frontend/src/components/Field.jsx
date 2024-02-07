import lightLeatherBg from '../assets/lightLeather.png';
import darkLeatherBg from '../assets/darkLeather.png';

export default function Field({ children, onFieldClick, sizeX, sizeY, id }) {
  const fieldColor = parseInt(id) % 2 === 0 ? 'white' : 'gray';
  const fontColor = fieldColor === 'white' ? 'black' : 'white';
  const bg = fieldColor === 'white' ? lightLeatherBg : darkLeatherBg;

  return (
    <div className="fieldContainer">
      <img className="fieldBackgroundImage" src={bg} />
      <div
        onClick={(e) => onFieldClick(e, id, 1)}
        style={{
          width: '100%',
          height: sizeY,
          backgroundColor: 'transparent',
          color: fontColor,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
        {children[id][0]}
      </div>
      <div
        onClick={(e) => onFieldClick(e, id, 2)}
        style={{
          width: '100%',
          height: sizeY,
          backgroundColor: 'transparent',
          color: fontColor,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
        {children[id][1]}
      </div>
    </div>
  );
}
