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
  let digitsAndTheirPositionsFromEnd = [];
  for (let i = 0; i < Object.keys(positionsFromEndAndTheirDigits).length; i++) {
    digitsAndTheirPositionsFromEnd.push([
      parseInt(Object.values(positionsFromEndAndTheirDigits)[i]),
      parseInt(Object.keys(positionsFromEndAndTheirDigits)[i]),
    ]);
  }
  console.log(digitsAndTheirPositionsFromEnd);
  //Replace each digit depending on its position from the end of the inputed number with the correct roman form
  let fullRomanNumeral = [];
  digitsAndTheirPositionsFromEnd.forEach((digit) => {
    fullRomanNumeral.unshift(romans[digit[0]][digit[1]]);
  });
  console.log(fullRomanNumeral);
}

convertToRoman(111);

/* convertToRoman(2) should return "II".
convertToRoman(3) should return "III".
convertToRoman(4) should return "IV".
convertToRoman(5) should return "V".
convertToRoman(9) should return "IX".
convertToRoman(12) should return "XII".
convertToRoman(16) should return "XVI".
convertToRoman(29) should return "XXIX".
convertToRoman(44) should return "XLIV".
convertToRoman(45) should return "XLV"
convertToRoman(68) should return "LXVIII"
convertToRoman(83) should return "LXXXIII"
convertToRoman(97) should return "XCVII"
convertToRoman(99) should return "XCIX"
convertToRoman(400) should return "CD"
convertToRoman(500) should return "D"
convertToRoman(501) should return "DI"
convertToRoman(649) should return "DCXLIX"
convertToRoman(798) should return "DCCXCVIII"
convertToRoman(891) should return "DCCCXCI"
convertToRoman(1000) should return "M"
convertToRoman(1004) should return "MIV"
convertToRoman(1006) should return "MVI"
convertToRoman(1023) should return "MXXIII"
convertToRoman(2014) should return "MMXIV"
convertToRoman(3999) should return "MMMCMXCIX" */
