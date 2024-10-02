
import { useState } from "react";



export default function Player(Player) {  
  const [playerName, setPlayeName] = useState(Player.name);
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
        <span className="playerSymbo">{Player.symbol}</span>
        <button className="editButton" onClick={handleClick} >{
          isEditing ? "Save" : "Edit"
           }</button>
      </li>
    </>
  );
}
