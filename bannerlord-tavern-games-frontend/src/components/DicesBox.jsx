import Pentagon from "./shapes/Pentagon";

export default function DicesBox() {
    return (
        <div style={{ position: 'relative' }}>
            <Pentagon opacity={.8} img='https://i.ibb.co/HK4jNK4/dark-wood.jpg' color='orange' height='300px' width='315px' top='0' left='0' zIndex='1' transform='translate(3%, 55%)' />
            <Pentagon opacity={0.5} img='https://i.ibb.co/HK4jNK4/light-wood.jpg' color='brown' height='270px' width='287.5px' top='50%' left='50%' zIndex='2' transform='translate(-50%, -50%)' />
        </div>
    );
}