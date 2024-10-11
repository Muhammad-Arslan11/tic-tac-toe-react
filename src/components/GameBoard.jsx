// import { useState } from "react";
import PropTypes from 'prop-types';





export default function GameBoard(props){


  
  //  const[gameBoard, setGameBoard] = useState(intialGameBoard);

  //  function handleSelectSquare(rowIndex, colIndex){
  //   if(gameBoard[rowIndex][colIndex] !== null) return;
   


  //    setGameBoard((prevGameBoard)=>{
  //      const updatedGameBoard = [...prevGameBoard.map((prevArray) => [...prevArray])]; // it hold the content of original array
  //       updatedGameBoard[rowIndex][colIndex] = props.activePlayerSymbol;
  //       return updatedGameBoard;
  //    });

  //    props.onPlayerSelect();
  //  }
 

    return (
      <ol className="game-board">
        {props.board.map((row, rowIndex)=> (
        <li key={rowIndex}>
            <ol>
                {row.map((playerSymbol, colIndex)=> (
            <li key={colIndex}>
                <button 
                className={`game-board-btn ${playerSymbol ? 'marked' : ''}`}
                onClick={
                  ()=>{
                    
                    if(playerSymbol) return;  // disable the recurring clicks once the box is clicked
                    props.onPlayerSelect(rowIndex, colIndex)
                  } 
                  }
                //  disabled={!!playerSymbol} 
                 >
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
  activePlayerSymbol: PropTypes.string,
  board: PropTypes.array,
};