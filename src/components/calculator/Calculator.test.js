import React from "react";
import ReactDOM from "react-dom";
import { Calculator } from "./Calculator";

import { render } from "@testing-library/react";
import renderer from "react-test-renderer";

// testing the unconnected component
describe("Calculator component", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Calculator></Calculator>, div);
  });

  it("renders buttons correctly", () => {
    const { getByTestId } = render(<Calculator text="number"></Calculator>);
    expect(getByTestId("button-I")).toHaveTextContent("I");
    expect(getByTestId("button-V")).toHaveTextContent("V");
    expect(getByTestId("button-X")).toHaveTextContent("X");
    expect(getByTestId("button-L")).toHaveTextContent("L");
    expect(getByTestId("button-C")).toHaveTextContent("C");
    expect(getByTestId("button-D")).toHaveTextContent("D");
    expect(getByTestId("button-M")).toHaveTextContent("M");
    expect(getByTestId("button-+")).toHaveTextContent("+");
    expect(getByTestId("button--")).toHaveTextContent("-");
    expect(getByTestId("button-*")).toHaveTextContent("*");
    expect(getByTestId("button-=")).toHaveTextContent("=");
  });
});
