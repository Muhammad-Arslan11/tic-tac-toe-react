 
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
        <ol className='playersContainer hightlight-player'>
         <Player name="Player" symbol="X" isActive={activePlayer === 'X'} />
         <Player name="Player" symbol="O"  isActive={activePlayer === 'O'}/>
        </ol>
       <GameBoard onPlayerSelect={handleSelectSquare} activePlayerSymbol={activePlayer} />
      </div>
     
      Log
    </main>
    </>
  )
}

export default App
