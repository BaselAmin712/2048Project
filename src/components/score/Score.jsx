import React from "react";
import "./Score.css";

function Score(props) {
  return (
    <div className="score-style">
      <div className="current-score">
        <h1>
          SCORE
          <br />
          {props.scoreState[0]}
        </h1>
      </div>
      <div className="high-score">
        <h1>
          BEST
          <br />
          {props.scoreState[1]}
        </h1>
      </div>
    </div>
  );
}
export default Score;
