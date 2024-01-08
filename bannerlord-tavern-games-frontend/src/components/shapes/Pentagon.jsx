import './Pentagon.scss';

export default function Pentagon({ opacity, img, color, height, width, top, left, zIndex, transform }) {
    const url = 'url(' + img + ')';

    return (
        <div className="container" >
            <div className="pentagon-1" style={{ opacity: opacity, background: color, height: height, width: width, top: top, left: left, zIndex: zIndex, transform: transform }} ></div>
            <div className="pentagon-2"></div>
        </div>
    );
}