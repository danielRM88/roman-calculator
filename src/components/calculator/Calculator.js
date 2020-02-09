import React from "react";
import Button from "../button/Button";
import Display from "../display/Display";
import { connect } from "react-redux";
import "./Calculator.css";

import {
  addNumber,
  addOperation,
  calculate,
  clear
} from "../../actions/calculatorActions";

export const Calculator = ({
  addNumberAction,
  addOperationAction,
  calculateAction,
  clearAction,
  display,
  error
}) => {
  return (
    <div className="calculator">
      <h1>Roman Number Calculator</h1>
      {error !== null ? <p>{error}</p> : ""}
      <br />
      <div className="container">
        <div className="row">
          <div className="col-sm">
            <Display text={display} />
          </div>
        </div>
        <div className="row">
          <div className="col-sm">
            <Button label="I" onActionClick={addNumberAction}></Button>
          </div>
          <div className="col-sm">
            <Button label="V" onActionClick={addNumberAction}></Button>
          </div>
          <div className="col-sm">
            <Button label="+" onActionClick={addOperationAction}></Button>
          </div>
        </div>
        <div className="row">
          <div className="col-sm">
            <Button label="X" onActionClick={addNumberAction}></Button>
          </div>
          <div className="col-sm">
            <Button label="L" onActionClick={addNumberAction}></Button>
          </div>
          <div className="col-sm">
            <Button label="-" onActionClick={addOperationAction}></Button>
          </div>
        </div>
        <div className="row">
          <div className="col-sm">
            <Button label="C" onActionClick={addNumberAction}></Button>
          </div>
          <div className="col-sm">
            <Button label="D" onActionClick={addNumberAction}></Button>
          </div>
          <div className="col-sm">
            <Button label="*" onActionClick={addOperationAction}></Button>
          </div>
        </div>
        <div className="row">
          <div className="col-sm">
            <Button label="CA" onActionClick={clearAction}></Button>
          </div>
          <div className="col-sm">
            <Button label="M" onActionClick={addNumberAction}></Button>
          </div>
          <div className="col-sm">
            <Button label="=" onActionClick={calculateAction}></Button>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  const number1 = state.number1;
  const number2 = state.number2;
  const operation = state.operation;
  let display = "";

  if (number1 !== null) {
    display += number1
  }

  if (operation !== null) {
    display += ` ${operation} `
  }

  if (number2 !== null) {
    display += number2
  }

  return {
    display,
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
  },
  clearAction: () => {
    dispatch(clear());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Calculator);
