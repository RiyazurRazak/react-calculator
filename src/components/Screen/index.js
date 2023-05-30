import React from "react";
import "./style.css";

function Screen({ value }) {
  return (
    <div className="screen__root">
      <pre>{value}</pre>
    </div>
  );
}

export default Screen;
