export const ADD_NUMBER = "ADD_NUMBER";
export const ADD_OPERATION = "ADD_OPERATION";
export const CALCULATE = "CALCULATE";
export const CLEAR = "CLEAR";

export const addNumber = number => ({
  type: ADD_NUMBER,
  number
});

export const addOperation = operation => ({
  type: ADD_OPERATION,
  operation
});

export const calculate = () => ({
  type: CALCULATE
});

export const clear = () => ({
  type: CLEAR
});
