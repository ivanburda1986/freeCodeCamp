function sumAll(arr) {
  const sortedNumbers = ([].concat(arr)).sort((a, b) => a - b);
  const allNumbers = [];
  for (let i = sortedNumbers[0]; i <= sortedNumbers[sortedNumbers.length - 1]; i += 1) {
    allNumbers.push(i);
  }
  const sum = allNumbers.reduce((acc, val) => acc + val, 0);
  return (sum);
}

sumAll([1, 4]);
