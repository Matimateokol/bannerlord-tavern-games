import './App.scss';
import PulucGame from './components/PulucGame';
import Table from './components/Table';
import Pentagon from './components/shapes/Pentagon';

function App() {
  return (
    <>
      <Table>
        <PulucGame />
      </Table>
    </>
  );
}

export default App;
