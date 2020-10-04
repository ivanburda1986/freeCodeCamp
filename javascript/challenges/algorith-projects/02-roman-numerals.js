function convertToRoman(num) {
  let romans = {
    1: ["I", "X", "C", "M"],
    2: [],
    3: [],
    4: [],
    5: [],
    6: [],
    7: [],
    8: [],
    9: [],
  };

  let digits = [...num.toString()];
  let length = digits.length;

  //Get an object of positions from the end of the inputed number and digits at the positions
  let positionsFromEndAndTheirDigits = {};
  for (let i = length; i > 0; i--) {
    positionsFromEndAndTheirDigits[i] = digits[length - i];
  }
  //Get an object with all individual digits in the inputed number and for each of them a position from the end
  let digitsAndTheirPositionsFromEnd = {};
  //Replace each digit depending on its position from the end of the inputed number with the correct roman form
  console.log(positionsFromEndAndTheirDigits);
}

convertToRoman(1234);
