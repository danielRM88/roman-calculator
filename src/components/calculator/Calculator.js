import React from "react";
import Button from "../button/Button";
import Display from "../display/Display";
import { connect } from "react-redux";

import {
  addNumber,
  addOperation,
  calculate
} from "../../actions/calculatorActions";

export const Calculator = ({
  addNumberAction,
  addOperationAction,
  calculateAction,
  number,
  error
}) => {
  return (
    <div>
      <h1>Roman Number Calculator</h1>
      {error !== null ? <p>{error}</p> : ""}
      <Display text={number} />
      <br />
      <Button label="I" onActionClick={addNumberAction}></Button>
      <Button label="V" onActionClick={addNumberAction}></Button>
      <Button label="X" onActionClick={addNumberAction}></Button>
      <Button label="L" onActionClick={addNumberAction}></Button>
      <Button label="C" onActionClick={addNumberAction}></Button>
      <Button label="D" onActionClick={addNumberAction}></Button>
      <Button label="M" onActionClick={addNumberAction}></Button>
      <Button label="+" onActionClick={addOperationAction}></Button>
      <Button label="-" onActionClick={addOperationAction}></Button>
      <Button label="*" onActionClick={addOperationAction}></Button>
      <Button label="=" onActionClick={calculateAction}></Button>
    </div>
  );
};

const mapStateToProps = state => {
  const number1 = state.number1;
  const number2 = state.number2;
  const operation = state.operation;
  const result = state.result;
  let number = "";

  if (result !== null) {
    number = result;
  } else if (operation !== null) {
    number = number2;
  } else {
    number = number1;
  }

  return {
    number,
    error: state.error
  };
};

const mapDispatchToProps = dispatch => ({
  addNumberAction: number => {
    dispatch(addNumber(number));
  },
  addOperationAction: operation => {
    dispatch(addOperation(operation));
  },
  calculateAction: () => {
    dispatch(calculate());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Calculator);
