import lightLeatherBg from '../assets/lightLeather.png';
import darkLeatherBg from '../assets/darkLeather.png';

export default function Field({sizeX, sizeY, id}){

    const fieldColor = (parseInt(id) % 2 === 0) ? 'white' : 'gray';
    const fontColor = fieldColor === 'white' ? 'black' : 'white';
    const bg = fieldColor === 'white' ? lightLeatherBg : darkLeatherBg;

    return (
        <div className='fieldContainer'>
            <img className='fieldBackgroundImage' src={bg}/>
            <button style={{ width: sizeX, height: sizeY, backgroundColor: 'transparent', color: fontColor }}>{id}</button>
        </div>
    );
}