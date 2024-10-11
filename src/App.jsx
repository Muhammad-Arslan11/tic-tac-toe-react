 
import Player from './components/Player.jsx';
import GameBoard from './components/GameBoard.jsx';
import Log from './components/Log.jsx';
import './App.css'
import { useState } from 'react';
import { WINNING_COMBINATIONS } from '../winning-combinations.js';


function deriveActivePlayer(gameTurns){
  let currentPlayer = 'X';
  if(gameTurns.length > 0 && gameTurns[0].player === 'X'){
    currentPlayer = 'O';
  }else if(gameTurns > 0 && gameTurns[0].player === 'O'){
     currentPlayer = 'X';
  }
  return currentPlayer;
}



function App() {
  const [gameTurns, setGameTurns] = useState([]);
  // const [activePlayer, setActivePlayer]  = useState('X');
  // lift the state from GameBoard component
  // reduce as much of state as you possibilly can
  let activePlayer = deriveActivePlayer(gameTurns);

  const intialGameBoard =  
  [
      [null, null, null],
      [null, null, null],
      [null, null, null],
  ];

  let gameBoard = intialGameBoard;

  for(const turn of gameTurns){
   // twice destructuring 
      const {square, player} = turn;
      const {row, col} = square;

      gameBoard[row][col] = player;

  }

  let winner = null;

  for(const combination of WINNING_COMBINATIONS){
     const firstSquareSymbol = gameBoard[combination[0].row][combination[0].col];
     const secondSquareSymbol = gameBoard[combination[1].row][combination[1].col];
     const thirdSquareSymbol = gameBoard[combination[2].row][combination[2].col];


     if(firstSquareSymbol 
       && firstSquareSymbol === secondSquareSymbol 
       && firstSquareSymbol === thirdSquareSymbol){
     winner = firstSquareSymbol;
   }
  }


  function handleSelectSquare(rowIndex, colIndex){

    setGameTurns((prevTurns)=>{

      let currentPlayer = deriveActivePlayer(prevTurns);
      

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
       <GameBoard onPlayerSelect={handleSelectSquare} activePlayerSymbol={activePlayer} board={gameBoard} />
      </div>
     
      <Log turns={gameTurns} winner={winner}/>
    </main>
    </>
  )
}

export default App
