export const romanToInt = romanNumber => {
  romanNumber = romanNumber.toUpperCase();

  let result = 0;
  const intHash = getIntHash();

  for (let i = 0; i < romanNumber.length; i++) {
    let current = intHash[romanNumber[i]];
    let next = intHash[romanNumber[i + 1]];

    if (current === undefined) {
      throw new Error(romanNumber[i] + " is not a valid roman numeral");
    }

    if (current < next) {
      result -= current;
    } else {
      result += current;
    }
  }

  return result;
};

export const intToRoman = number => {
  if (number <= 0) {
    throw new Error("invalid number, it must be greater than zero");
  }

  let result = "";
  let multiplier = 1;

  for (; number > 0; number = Math.trunc(number / 10)) {
    let last = number % 10;

    if (getRomanSymbolHash()[last] === undefined) {
      result = getRomanSymbol(last, multiplier) + result;
    } else {
      result = getRomanSymbolHash()[last * multiplier] + result;
    }

    multiplier *= 10;
  }

  return result;
};

// this function transforms a single digit integer into its roman representation
export const getRomanSymbol = (number, multiplier) => {
  if (number > 9) {
    throw new Error("number must be a single digit integer");
  }

  if (multiplier > 1 && multiplier % 10 !== 0) {
    throw new Error("multipler must be either 1 or a multiple of 10");
  }

  let result = "";
  const romanSymbolHash = getRomanSymbolHash();

  if (number < 4) {
    for (let digit = 0; digit < number; digit++) {
      result += romanSymbolHash[1 * multiplier];
    }
  } else if (number === 4) {
    result = romanSymbolHash[1 * multiplier] + romanSymbolHash[5 * multiplier];
  } else if (number > 5 && number < 9) {
    result += romanSymbolHash[5 * multiplier];
    for (let digit = 0; digit < number - 5; digit++) {
      result += romanSymbolHash[1 * multiplier];
    }
  } else if (number === 9) {
    result = romanSymbolHash[1 * multiplier] + romanSymbolHash[10 * multiplier];
  }

  return result;
};

const getRomanSymbolHash = () => {
  return { 1: "I", 5: "V", 10: "X", 50: "L", 100: "C", 500: "D", 1000: "M" };
};

const getIntHash = () => {
  return { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
};
