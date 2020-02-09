import { intToRoman, romanToInt, getRomanSymbol } from "./util";

describe("util functions", () => {
  describe("romanToInt", () => {
    it("converts a roman numeral to its corresponding integer", () => {
      const intNumeral = romanToInt("IV");

      expect(intNumeral).toBe(4);
    });

    it("is case insensitive", () => {
      const intNumeral = romanToInt("Iv");

      expect(intNumeral).toBe(4);
    });

    it("throws error for wrong roman numerals", () => {
      expect(() => romanToInt("H")).toThrow(Error);
    });
  });

  describe("intToRoman", () => {
    it("converts an integer to its proper roman representation", () => {
      const romanNumeral = intToRoman(4);

      expect(romanNumeral).toBe("IV");
    });

    it("throws error for negative numbers", () => {
      expect(() => intToRoman(-3)).toThrow(Error);
    });

    it("throws error for zero", () => {
      expect(() => intToRoman(0)).toThrow(Error);
    });
  });

  describe("getRomanSymbol", () => {
    it("returns the proper roman symbol given the parameters", () => {
      expect(getRomanSymbol(3, 1)).toBe("III");
      expect(getRomanSymbol(3, 10)).toBe("XXX");
    });

    it("throws error if number is not a single digit positive integer greater than zero", () => {
      expect(() => {
        getRomanSymbol(13, 1);
      }).toThrow(Error);
      expect(() => {
        getRomanSymbol(-3, 1);
      }).toThrow(Error);
      expect(() => {
        getRomanSymbol(0, 1);
      }).toThrow(Error);
    });

    it("throws error if multiplier is not a multiple of 10", () => {
      expect(() => {
        getRomanSymbol(4, 3);
      }).toThrow(Error);
    });
  });
});
