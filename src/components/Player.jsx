

export default function Player(Player) {  
  return (
    <>
      <li className="player">
        <span className="playerName">{Player.name}</span>
        <span className="playerSymbo">{Player.symbol}</span>
        <button className="editButton">Edit</button>
      </li>
    </>
  );
}
