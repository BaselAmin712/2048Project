import keyHandlers from "./keyHandler";
import gameUtils from "../gameUtils";

function handleKeyDown(event, props) {
  if (event.key === "ArrowDown") {
    const arr = keyHandlers.arrowDown(props.numbers, props.scoreState[0]);
    props.updateNumbers(arr.array);
    props.updateScore([arr.score, props.scoreState[1]]);
  } else if (event.key == "ArrowUp") {
    const arr = keyHandlers.arrowUp(props.numbers, props.scoreState[0]);
    props.updateNumbers(arr.array);
    props.updateScore([arr.score, props.scoreState[1]]);
  } else if (event.key == "ArrowRight") {
    const arr = keyHandlers.arrowRight(props.numbers, props.scoreState[0]);
    props.updateNumbers(arr.array);
    props.updateScore([arr.score, props.scoreState[1]]);
  } else if (event.key == "ArrowLeft") {
    const arr = keyHandlers.arrowLeft(props.numbers, props.scoreState[0]);
    props.updateNumbers(arr.array);
    props.updateScore([arr.score, props.scoreState[1]]);
  }
  if (gameUtils.gameWon(props.numbers)) {
    props.updateGameState("gameWon");
    document.body.style.zoom = "82%";
  }
  if (gameUtils.getEmptyCells(props.numbers).length === 0) {
    if (!gameUtils.hasMoreSteps(props.numbers)) {
      props.updateGameState("gameOver");
      document.body.style.zoom = "82%";
    }
  } else if (
    event.key === "ArrowDown" ||
    event.key == "ArrowUp" ||
    event.key == "ArrowRight" ||
    event.key == "ArrowLeft"
  ) {
    props.updateNumbers(gameUtils.addRandomCell(props.numbers));
  }
}

export default handleKeyDown;
