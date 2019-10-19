function rangeOfNumbers(startNum, endNum) {
  if (endNum <= startNum) {
    return [endNum];
  }
  var numbers = rangeOfNumbers(startNum, endNum - 1);
  numbers.push(endNum);
  return (numbers);
}

console.log(rangeOfNumbers(1, 5));
