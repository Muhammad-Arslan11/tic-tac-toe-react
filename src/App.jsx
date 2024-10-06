 
import Player from './components/Player.jsx';
import GameBoard from './components/GameBoard.jsx';
import Log from './components/Log.jsx';
import './App.css'
import { useState } from 'react';




function App() {
  const [activePlayer, setActivePlayer]  = useState('X');
  // lift the state from GameBoard component
  const [gameTurns, setGameTurns] = useState([]);

  function handleSelectSquare(rowIndex, colIndex){
    setActivePlayer((currentActivePlayer) => currentActivePlayer === 'X' ? 'O' : 'X');

    setGameTurns((prevTurns)=>{

      let currentPlayer = 'X';
      if(prevTurns.length > 0 && prevTurns[0].player === 'X'){
        currentPlayer = 'O';
      }

      let updatedTurns = [
        {square: {row : rowIndex, col : colIndex},
         player: currentPlayer}, 
         ...prevTurns  // copy previous data
        ];
      return updatedTurns;
    }
    );
  }


  return (
    <>
    <main>
      <div id="gameContainer">
        <ol className='playersContainer hightlight-player'>
         <Player name="Player 1" symbol="X" isActive={activePlayer === 'X'} />
         <Player name="Player 2" symbol="O"  isActive={activePlayer === 'O'}/>
        </ol>
       <GameBoard onPlayerSelect={handleSelectSquare} activePlayerSymbol={activePlayer} turns={gameTurns} />
      </div>
     
      <Log turns={gameTurns}/>
    </main>
    </>
  )
}

export default App
