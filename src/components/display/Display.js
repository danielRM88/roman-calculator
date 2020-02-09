import React from "react";

function Display({ text = "" }) {
  return <p data-testid="display">{text}</p>;
}

export default Display;
