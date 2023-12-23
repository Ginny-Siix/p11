import React from "react";
import "../../assets/style/main.css";

function Button(props) {
  // Render a button element with the provided props
  // - onClick: Click event handler function
  // - className: CSS class for styling
  // - disabled: Flag to disable the button
  // - buttonText: Text content of the button
  return (
    <button
      onClick={props.handleClick}
      className={props.className}
      disabled={props.disabled}
    >
      {props.buttonText}
    </button>
  );
}

export default Button;
