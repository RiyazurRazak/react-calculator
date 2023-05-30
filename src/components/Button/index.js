import React from "react";
import "./style.css";

function Button({ text, onClick, ...rest }) {
  return (
    <button className="button__root" onClick={() => onClick(text)} {...rest}>
      {text}
    </button>
  );
}

export default Button;
