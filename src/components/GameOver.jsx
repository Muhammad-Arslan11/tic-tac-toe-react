import PropTypes from 'prop-types';

export default function GameOver({winner}){
    return (
        <div>
            <h2>GAME OVER</h2>
            {winner && <p>{winner} Won!!</p>}
            {
              !winner &&   <p>It&apos;s a Draw</p>

            }
            <h2> <button>Rematch</button></h2>
        </div>
    );
}

GameOver.propTypes = {
    winner: PropTypes.string,
  };