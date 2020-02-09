import React from "react";
import "./Button.css";

function Button({ label, onActionClick }) {
  return (
    <button
      data-testid={"button-" + label}
      className="button-style"
      onClick={() => onActionClick(label)}
    >
      {label}
    </button>
  );
}

export default Button;
