import { useState } from "react"

export default function Player({initialName, symbol, isActive}) {
  const [ playerName, setPlayerName ] = useState(initialName);
  const [ isEditing, setIsEditing ] = useState(false);

  function handleEditButton(){
    /*
     * Toggle the editing state using a functional updater.
     * 
     * Alternative: setIsEditing(!isEditing)
     * This would also toggle the state, but it directly uses the current value of `isEditing`.
     * 
     * Why not use the alternative?
     * React state updates are batched and may be asynchronous, so relying on the current 
     * state (`isEditing`) could lead to stale data if multiple updates happen in quick succession.
     * 
     * By using a functional updater `(prevEditing) => !prevEditing`, we ensure the toggle always
     * works correctly, even if React batches or delays updates.
     */
    setIsEditing((editing) => !editing);
  }

  function handleChange(eventObject) {
    setPlayerName(eventObject.target.value);
  }

  let editablePlayerName = <span className="player-name">{playerName}</span>;
  let btnCaption = 'Edit';

  if(isEditing) {
    editablePlayerName = <input type="text" required value={playerName} onChange={handleChange}></input>
    btnCaption = "Save";
  }

  return (
      <li className={isActive ? "active" : undefined}>
          <span className="player"> 
            {editablePlayerName}
            <span className="player-symbol">{symbol}</span>
          </span>
          <button type="button"
                  onClick={handleEditButton}>
                    {btnCaption}
          </button>
        </li>
  ) 
}