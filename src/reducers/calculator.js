import {
  ADD_NUMBER,
  ADD_OPERATION,
  CALCULATE,
  CLEAR
} from "../actions/calculatorActions";

import { intToRoman, romanToInt } from "../util/util";

export default (state, action) => {
  switch (action.type) {
    case CLEAR:
      return {
        ...state,
        number1: null,
        number2: null,
        operation: null,
        error: null
      }
    case ADD_NUMBER:
      let number1 = state.number1 || "";
      let number2 = state.number2 || "";
      let operation = state.operation;
      
      if (state.operation !== null) {
        number2 += action.number;
      } else {
        number1 += action.number;
      }

      return {
        ...state,
        number1,
        number2,
        operation,
        error: null
      };
    case ADD_OPERATION:
      if (state.number1 === null) {
        return state;
      } else {
        return {
          ...state,
          operation: action.operation
        };
      }
    case CALCULATE:
      if (state.number2 === null || state.number2 === "") {
        return state;
      } else {
        try {
          let operationResult = calculateResult(state.number1, state.number2, state.operation)
          return {
            ...state,
            number1: operationResult,
            number2: null,
            operation: null
          };
        } catch (e) {
          return {
            ...state,
            operation: null,
            number1: null,
            number2: null,
            error: e.message
          };
        }
      }
    default:
      return state;
  }
};

const calculateResult = (number1, number2, operation) => {
  const intNumber1 = romanToInt(number1);
  const intNumber2 = romanToInt(number2);
  let result = 0;

  if (operation === "+") {
    result = intNumber1 + intNumber2;
  } else if (operation === "-") {
    result = intNumber1 - intNumber2;
  } else if (operation === "*") {
    result = intNumber1 * intNumber2;
  }

  // there are no negative roman numerals, no zero either
  if (result <= 0) {
    // error
    throw new Error(
      "invalid calculation, the second number cannot be bigger than the first"
    );
  }

  return intToRoman(result);
};
