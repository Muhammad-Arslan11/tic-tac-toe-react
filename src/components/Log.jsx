import PropTypes from 'prop-types';

export default function Log(props){
    console.log(props);

    return (
        <>
        {
         props.winner ? (<div>WINNER: {props.winner}</div>) : (<div>NO WINNER!: KEEP PLAYING</div>)
        }
        <ol className="log-list">
            { props.turns.map(turn => <li className="list" key={`${turn.square.row}${turn.square.col}`}>{turn.player} selected {turn.square.row},{turn.square.col}</li>)
            }
        </ol>
        </>
    ); 
}

Log.propTypes = {
    turns: PropTypes.array,
    winner: PropTypes.string,
  };