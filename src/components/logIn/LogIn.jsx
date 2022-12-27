import React from "react";
import "./LogIn.css";
function LogIn(props) {
  const onChange =
    (stateKey) =>
    ({ target }) =>
      props.setLoginData({ ...props.loginData, [stateKey]: target.value });

  const onSubmit = (event) => {
    props.setIsLoggedIn(true);
    event.preventDefault();
  };
  /*const ErrorMessage = (name) =>
    name === props.errorMessages.name && (
      <div className="error">{props.errorMessages.message}</div>
    );*/

  return (
    <div className="login">
      <h1 className="loginTitle">2048 Game!</h1>
      <h2 className="loginTitle">Log In to start the Game</h2>
      <form className="logInForm" onSubmit={onSubmit}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Email"
          onChange={onChange("email")}
          value={props.loginData.email}
          required
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Password"
          onChange={onChange("password")}
          value={props.loginData.password}
          required
        />

        <div className="FormBtnLogin">
          <button type="submit">Log in</button>
        </div>
        <div className="FormBtnLogin">
          <button type="button">Register</button>
        </div>
      </form>
    </div>
  );
}

export default LogIn;
