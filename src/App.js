import './App.css';
import TitleBar from './TitleBar';
import GameBoard from './GameBoard';

function App() { //gameboard
  
  const handleClick = (e) => {
    e.preventDefault(); //prevent reload when handling click
    console.log(e.target);
  };
  
  return (
    <div className="App">
        <TitleBar />
        <GameBoard />
        <button onClick={handleClick}>Start</button>
    </div>
  );
}

export default App;
