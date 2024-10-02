
import { useState } from "react";
import PropTypes from 'prop-types';



export default function Player(props) {  
  const [playerName, setPlayeName] = useState(props.name);
  const [isEditing, setIsEditing] = useState(false);


  function handleChange(event){
     setPlayeName(event.target.value);
  }


  function handleClick(){
    setIsEditing((editing)=> !editing );
  }

   let editablePlayerName =    <span className="playerName">{playerName}</span>;

    if(isEditing){
      editablePlayerName = <input type="text" required value={playerName} onChange={handleChange}/>;
    }


  return (
    <>
      <li className="player">
       {editablePlayerName}
        <span className="playerSymbo">{props.symbol}</span>
        <button className="editButton" onClick={handleClick} >{
          isEditing ? "Save" : "Edit"
           }</button>
      </li>
    </>
  );
}

Player.propTypes = {
  name: PropTypes.string.isRequired,
  symbol: PropTypes.string.isRequired,
};