import Pentagon from "./shapes/Pentagon";

export default function DicesBox({children}) {
    return (
        <div style={{ position: 'relative' }}>
            <Pentagon opacity={.8} img='https://i.ibb.co/HK4jNK4/dark-wood.jpg' color='orange' height='24vw' width='24vw' top='50%' left='50%' zIndex='1' transform='translate(-50%, 52%)' />
            <Pentagon opacity={0.5} img='https://i.ibb.co/HK4jNK4/light-wood.jpg' color='brown' height='20vw' width='20vw' top='50%' left='50%' zIndex='2' transform='translate(-50%, -50%)' >
                {children}
            </Pentagon>
        </div>
    );
}