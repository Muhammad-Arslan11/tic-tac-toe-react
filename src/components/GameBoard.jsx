import { useState } from "react";
import PropTypes from 'prop-types';


const intialGameBoard =  
  [
      [null, null, null],
      [null, null, null],
      [null, null, null],
  ];


export default function GameBoard(props){
  
   const[gameBoard, setGameBoard] = useState(intialGameBoard);

   function handleSelectSquare(rowIndex, colIndex){
    if(gameBoard[rowIndex][colIndex] !== null) return;
   


     setGameBoard((prevGameBoard)=>{
       const updatedGameBoard = [...prevGameBoard.map((prevArray) => [...prevArray])]; // it hold the content of original array
        updatedGameBoard[rowIndex][colIndex] = 'X';
        return updatedGameBoard;
     });

     props.onPlayerSelect();
   }
 

    return (
      <ol className="game-board">
        {gameBoard.map((row, rowIndex)=> (
        <li key={rowIndex}>
            <ol>
                {row.map((playerSymbol, colIndex)=> (
            <li key={colIndex}>
                <button 
                className="game-board-btn" 
                onClick={()=> handleSelectSquare(rowIndex,colIndex)}>
                  {playerSymbol}
                  </button>
            </li>
                ))}
            </ol>
        </li>
        ))}
      </ol>

    );
}

GameBoard.propTypes = {
  onPlayerSelect: PropTypes.func.isRequired,
};