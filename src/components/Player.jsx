
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

   let editablePlayerName =     <span className={`playerName ${props.isActive ? 'active' : ''}`}>
   {playerName}
 </span>

    if(isEditing){
      editablePlayerName = <input type="text" required value={playerName} onChange={handleChange}/>;
    }


  return (
    <>
      <li className={`player`}>
       {editablePlayerName}
        <span className={`playerSymbol ${props.isActive ? 'active' : ''}`}>{props.symbol}</span>
        <div className="editButton" onClick={handleClick} >{
          isEditing ? "Save" : "Edit"
           }</div>
      </li>
    </>
  );
}

Player.propTypes = {
  name: PropTypes.string.isRequired,
  symbol: PropTypes.string.isRequired,
  isActive: PropTypes.bool,
};