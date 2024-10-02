 
import Player from './components/Player.jsx';
import GameBoard from './components/GameBoard.jsx';
import './App.css'
import { useState } from 'react';




function App() {
  const [activePlayer, setActivePlayer]  = useState('X');

  function handleSelectSquare(){
    setActivePlayer((currentActivePlayer) => currentActivePlayer === 'X' ? 'O' : 'X');
  }


  return (
    <>
    <main>
      <div id="gameContainer">
        <ol className='playersContainer'>
         <Player name="Player 1" symbol="X" />
         <Player name="Player 2" symbol="0" />
        </ol>
       <GameBoard onPlayerSelect={handleSelectSquare} />
      </div>
     
      Log
    </main>
    </>
  )
}

export default App
