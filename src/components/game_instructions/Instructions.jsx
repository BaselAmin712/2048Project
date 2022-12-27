import React from "react";
import "./Instructions.css";

function Instructions() {
  return (
    <div className="Instructions">
      <fieldset>
        <legend>
          <h2>HOW TO PLAY:</h2>
        </legend>
        <p>
          Use your arrow keys to move the tiles. Tiles with the same number
          merge into one when they touch. Add them up to reach 2048!
        </p>
      </fieldset>
    </div>
  );
}

export default Instructions;
