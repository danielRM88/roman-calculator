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
    const label = getByTestId("button");
    expect(label).toHaveTextContent("test");
  });

  // Snapshot testing
  it("matches snapshot", () => {
    const tree = renderer.create(<Button label="save"></Button>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
