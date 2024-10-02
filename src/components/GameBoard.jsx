

const intialGameBoard =  
  [
      [null, null, null],
      [null, null, null],
      [null, null, null],
  ];


export default function GameBoard(){
 

    return (
      <ol className="game-board">
        {intialGameBoard.map((row, rowIndex)=> (
        <li key={rowIndex}>
            <ol>
                {row.map((playerSymbol, colIndex)=> (
            <li key={colIndex}>
                <button className="game-board-btn">{playerSymbol}</button>
            </li>
                ))}
            </ol>
        </li>
        ))}
      </ol>

    );
}