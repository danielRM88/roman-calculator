import React from "react";
import "./Display.css";

function Display({ text = "" }) {
  return (
    <div className="display">
      <p data-testid="display" className="display-text">
        {text}
      </p>
    </div>
  );
}

export default Display;
