import React from "react";
import "./NewGame.css";
import gameUtils from "../../utils/gameUtils";

function NewGame(props) {
  return (
    <button
      className="restart-button"
      onClick={(e) => {
        props.updateNumbers(gameUtils.startNewGame());
        props.updateGameState("inProgress");
        props.updateScore([0, props.scoreState[1]]);
      }}
    >
      New Game
    </button>
  );
}
export default NewGame;
