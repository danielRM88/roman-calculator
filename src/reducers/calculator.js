import {
  ADD_NUMBER,
  ADD_OPERATION,
  CALCULATE
} from "../actions/calculatorActions";

import { intToRoman, romanToInt } from "../util/util";

export default (state, action) => {
  switch (action.type) {
    case ADD_NUMBER:
      let number1 = state.number1 || "";
      let number2 = state.number2 || "";
      let result = state.result;
      let operation = state.operation;

      // if result is already calculated it means we start a new operation
      // when we press a button
      if (result !== null) {
        number1 = action.number;
        number2 = null;
        operation = null;
        result = null;
      } else if (state.operation !== null) {
        number2 += action.number;
      } else {
        number1 += action.number;
      }

      return {
        ...state,
        number1,
        number2,
        operation,
        result,
        error: null
      };
    case ADD_OPERATION:
      return {
        ...state,
        operation: action.operation
      };
    case CALCULATE:
      try {
        return {
          ...state,
          result: calculateResult(state.number1, state.number2, state.operation)
        };
      } catch (e) {
        return {
          ...state,
          operation: null,
          number1: null,
          number2: null,
          result: null,
          error: e.message
        };
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
      "invalid calculation, the second number cannot be bigger that the first"
    );
  }

  return intToRoman(result);
};
