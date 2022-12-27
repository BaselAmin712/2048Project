import React from "react";
import "./Message.scss";

function Message(props) {
  return <h1 className={props.style}>{props.children}</h1>;
}
export default Message;
