import PropTypes from 'prop-types';

export default function Log(props){
    console.log(props);

    return (
        <>
        <ol className="log-list">
            { props.turns.map(turn => <li className="list" key={`${turn.square.row}${turn.square.col}`}>{turn.currentPlayer} selected {turn.row}{turn.col}</li>)
            }
        </ol>
        </>
    ); 
}

Log.propTypes = {
    turns: PropTypes.array,
  };