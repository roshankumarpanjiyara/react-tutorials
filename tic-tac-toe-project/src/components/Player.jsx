import { useState } from "react";

function Player(props) {
  const [playerName, setPlayerName] = useState(props.initialName);
  const [isEditing, setIsEditing] = useState(false);

  function handleEditClick() {
    setIsEditing((editing) => !editing);
    console.log(isEditing);
    if(isEditing){
      props.onChangeName(props.symbol, playerName);
    }
  }

  function handleNameChange(event){
    setPlayerName(event.target.value);
  }

  let editPlayerName = <span className="player-name">{playerName}</span>;
  if (isEditing) {
    editPlayerName = (<input type="text" required value={playerName} onChange={handleNameChange}/>);
  }

  return (
    <li className={props.isActive ? 'active' : undefined}>
      <span className="player">
        {editPlayerName}
        <span className="player-symbol">{props.symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}

export default Player;
