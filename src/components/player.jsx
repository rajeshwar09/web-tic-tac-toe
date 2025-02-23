import { useState } from "react";

/* eslint-disable react/prop-types */
const Player = ({ initialName, symbol, isActive, onChangeName }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(initialName);

  const handleEditClick = () => {
    setIsEditing((editing) => !editing); //  Always give latest updated state
    // setIsEditing(!isEditing) // => schedules a state update to true (may/maynot give updated state)
    if(isEditing) {
      onChangeName(symbol, playerName);
    }
  };

  const handleOnChange = (event) => {
    setPlayerName(event.target.value);
  };

  let editableNameField = <span className="player-name">{playerName}</span>;
  let btnLabel = "Edit";

  if (isEditing) {
    editableNameField = (
      <input
        type="text"
        required
        value={playerName}
        onChange={handleOnChange}
      />
    );
    btnLabel = "Save";
  }

  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {editableNameField}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{btnLabel}</button>
    </li>
  );
};

export default Player;
