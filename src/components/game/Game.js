import React from "react";
import gameUtils from "../../utils/gameUtils";
import keyDownHandler from "../../utils/handlers/keyDownHandler";
import "./frameStyle.css";
import Message from "../message/Message";
import Score from "../../components/score/Score";

let cellId = 0;

function GameFrame(props) {
  React.useEffect(() => {
    props.updateNumbers(gameUtils.startNewGame());
  }, []);

  React.useEffect(() => {
    const handleKeyDown = (event) => keyDownHandler(event, props);
    document.addEventListener("keydown", preventKeyBoardScroll, false);

    function preventKeyBoardScroll(e) {
      var keys = [32, 33, 34, 35, 37, 38, 39, 40];
      if (keys.includes(e.keyCode)) {
        e.preventDefault();
        return false;
      }
    }

    if (props.gameState === "inProgress")
      window.addEventListener("keydown", handleKeyDown);

    const cleanup = () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
    return cleanup;
  });

  return (
    <div className="container">
      <Score scoreState={props.scoreState} />
      {props.gameState == "gameWon" ? (
        <Message style="winMessage">Game Won</Message>
      ) : props.gameState == "gameOver" ? (
        <Message style="loseMessage">Game Over</Message>
      ) : null}
      <div className={props.gameState === "inProgress" ? "show" : "hide"}>
        <div className="gameFrame">
          {props.numbers.map((row) =>
            row.map((number) => (
              <div className="cell" key={cellId++}>
                <label className="cellNumber">
                  {number > 0 ? number : null}
                </label>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default GameFrame;
