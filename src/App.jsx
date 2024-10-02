 
import Player from './components/Player.jsx';
import GameBoard from './components/GameBoard.jsx';
import './App.css'



function App() {


  return (
    <>
    <main>
      <div id="gameContainer">
        <ol className='playersContainer'>
         <Player name="Player 1" symbol="X" />
         <Player name="Player 2" symbol="0" />
        </ol>
       <GameBoard/>
      </div>
     
      Log
    </main>
    </>
  )
}

export default App
