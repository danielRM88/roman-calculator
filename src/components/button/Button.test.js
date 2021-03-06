import React from "react";
import ReactDOM from "react-dom";
import Button from "./Button";

import { render } from "@testing-library/react";
import renderer from "react-test-renderer";

describe("Button component", () => {
  it("Renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Button></Button>, div);
  });

  it("Renders button correctly", () => {
    const { getByTestId } = render(<Button label="test"></Button>);
    const label = getByTestId("button-test");
    expect(label).toHaveTextContent("test");
  });
});
