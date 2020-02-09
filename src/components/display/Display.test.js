import React from "react";
import ReactDOM from "react-dom";
import Display from "./Display";

import { render } from "@testing-library/react";
import renderer from "react-test-renderer";

describe("Display component", () => {
  it("Renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Display></Display>, div);
  });

  it("Renders button correctly", () => {
    const { getByTestId } = render(<Display text="number"></Display>);
    const text = getByTestId("display");
    expect(text).toHaveTextContent("number");
  });
});
