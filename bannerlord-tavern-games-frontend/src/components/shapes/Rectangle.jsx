import './Rectangle.scss';

export default function Rectangle({ opacity, img, color, height, width, top, left, zIndex, transform }) {
    const url = 'url(' + img + ')';

    return (
        <div className="rectangleContainer" >
            <div className="rectangle" 
                style={{ 
                    opacity: opacity, 
                    background: color, 
                    height: height, 
                    width: width, 
                    top: top, 
                    left: left, 
                    zIndex: zIndex, 
                    transform: transform,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }} />
        </div>
    );
}