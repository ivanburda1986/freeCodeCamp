function convertToRoman(num) {

  //How an arabic numeral gets expressed as a roman numeral depending on its position from the ends of the arabic number
  let romans = {
    //Example: 1: ["I", "X", "C", "M"] -> How "1" gets expressed at 1st, 2nd, 3rd and 4th position from the end of the number to be converted
    0: ["", "", "", ""],
    1: ["I", "X", "C", "M"],
    2: ["II", "XX", "CC", "MM"],
    3: ["III", "XXX", "CCC", "MMM"],
    4: ["IV", "XL", "CD", "IV"],
    5: ["V", "L", "D", "V"],
    6: ["VI", "LX", "DC", "VM"],
    7: ["VII", "LXX", "DCC", "VMM"],
    8: ["VIII", "LXXX", "DCCC", "VMMM"],
    9: ["IX", "XC", "CM", "IX"],
  };

  //Amount of arabic numeral and the length of the number to be converted
  let numerals = [...num.toString()];
  let length = numerals.length;

  //Get an object of positions from the end of the inputed number and numerals at those positions
  let positionsFromEndAndTheirNumerals = {};
  for (let i = length; i > 0; i--) {
    positionsFromEndAndTheirNumerals[i] = numerals[length - i];
  }

  //Get an object with all individual arabic numerals in the inputed number and for each of them a position from the end
  let numeralsAndTheirPositionsFromEnd = [];
  for (let i = 0; i < Object.keys(positionsFromEndAndTheirNumerals).length; i++) {
    numeralsAndTheirPositionsFromEnd.push([
      parseInt(Object.values(positionsFromEndAndTheirNumerals)[i]),
      parseInt(Object.keys(positionsFromEndAndTheirNumerals)[i] - 1),
    ]);
  }

  //Replace each arabic numeral depending on its position from the end of the inputed number with the correct roman numeral
  let fullRomanNumeral = [];
  numeralsAndTheirPositionsFromEnd.forEach((numeral) => {
    fullRomanNumeral.unshift(romans[numeral[0]][numeral[1]]);
  });
  return (fullRomanNumeral.join(''));
}

console.log(convertToRoman(1492));