let arg1Multiples = [];
let arg2Multiples = [];
let commonMultiples = [];
let betweeners = [];



function sortAndSetInitial(arr) {
  let numbers = arr.sort((a, b) => a - b);
  arg1Multiples.push(numbers[0]);
  arg2Multiples.push(numbers[1]);
};

function getBetweeners() {
  for (let i = arg1Multiples[0] + 1; i < arg2Multiples[0]; i++) {
    betweeners.push(i);
  }
};


function optimiseArrays() {
  if (arg1Multiples.length > 2) {
    arg1Multiples = [arg1Multiples[0], arg1Multiples[arg1Multiples.length - 1]];
    //arg1Multiples.splice(1, arg1Multiples.indexOf(arg1Multiples.length - 2));
  }
  if (arg2Multiples.length > 2) {
    arg2Multiples = [arg2Multiples[0], arg2Multiples[arg2Multiples.length - 1]];
    //arg2Multiples.splice(1, arg2Multiples.indexOf(arg2Multiples.length - 2));
  }
  if (commonMultiples.length > 5) {
    commonMultiples = [commonMultiples[0], commonMultiples[commonMultiples.length - 1]];
    //arg2Multiples.splice(1, arg2Multiples.indexOf(arg2Multiples.length - 2));
  }
}


function arg1NextMultiple() {
  arg1Multiples.push(arg1Multiples[arg1Multiples.length - 1] + arg1Multiples[0]);
};

function arg2NextMultiple() {
  arg2Multiples.push(arg2Multiples[arg2Multiples.length - 1] + arg2Multiples[0]);
};

function isDivisibleByBetweeners() {
  let isDivisible = true;
  betweeners.forEach(number => {
    if (commonMultiples[commonMultiples.length - 1] % number !== 0) {
      isDivisible = false;
      arg1NextMultiple();
      arg2NextMultiple();
      getNextCommonMultiple();
    }
  })
  if (isDivisible) {
    console.log(commonMultiples[commonMultiples.length - 1]);
    return (commonMultiples[commonMultiples.length - 1]);
  }
}


function getNextCommonMultiple() {
  optimiseArrays()
  if (arg1Multiples[arg1Multiples.length - 1] < arg2Multiples[arg2Multiples.length - 1]) {
    arg1NextMultiple();
    getNextCommonMultiple();
  } else if (arg1Multiples[arg1Multiples.length - 1] > arg2Multiples[arg2Multiples.length - 1]) {
    arg2NextMultiple();
    getNextCommonMultiple();
  } else if (arg1Multiples[arg1Multiples.length - 1] === arg2Multiples[arg2Multiples.length - 1]) {
    commonMultiples.push(arg1Multiples[arg1Multiples.length - 1]);
    isDivisibleByBetweeners();
  }
}


function smallestCommons(arr) {
  sortAndSetInitial(arr);
  getBetweeners();
  getNextCommonMultiple();
}


smallestCommons([1, 11]);