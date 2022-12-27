import "./App.css";
import React from "react";
import Game from "./components/game/Game";
import Heading from "./components/Heading/Heading";
import LogOut from "./components/LogOut/LogOut";
import NewGame from "./components/newGame/NewGame";
import Instructions from "./components/game_instructions/Instructions";
import LogIn from "./components/logIn/LogIn";

function App() {
  const [scoreState, updateScore] = React.useState([0, 0]);
  const [numbers, updateNumbers] = React.useState([]);
  const [gameState, updateGameState] = React.useState("inProgress"); //inProgress | gameWon | gameOver
  const [loginData, setLoginData] = React.useState({
    email: "",
    password: "",
  });
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [user, setUser] = React.useState({});
  const [errorMessages, setErrorMessages] = React.useState({});
  return (
    <main className="App">
      {isLoggedIn ? (
        <div>
          <Heading loginData={loginData} />

          <Game
            numbers={numbers}
            updateNumbers={updateNumbers}
            gameState={gameState}
            updateGameState={updateGameState}
            scoreState={scoreState}
            updateScore={updateScore}
          />
          <LogOut />
          <Instructions />
          <NewGame
            updateNumbers={updateNumbers}
            updateGameState={updateGameState}
            updateScore={updateScore}
            scoreState={scoreState}
          />
        </div>
      ) : (
        <LogIn
          loginData={loginData}
          setLoginData={setLoginData}
          setIsLoggedIn={setIsLoggedIn}
          errorMessages={errorMessages}
          setErrorMessages={setErrorMessages}
        />
      )}
    </main>
  );
}

export default App;
