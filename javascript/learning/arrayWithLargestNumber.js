function largestOfFour(arr) {
  let largestNumbers = [];
  let largestInArray = Number.NEGATIVE_INFINITY;
  for (let i = 0; i < arr.length; i += 1) {
    for (let j = 0; j < arr[i].length; j += 1) {
      if (arr[i][j] > largestInArray) {
        largestInArray = arr[i][j];
      }
    }
    largestNumbers.push(largestInArray);
    largestInArray = Number.NEGATIVE_INFINITY;
  }
  return (largestNumbers);
}
largestOfFour([[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [1000000, 1001, 857, 1]]);
largestOfFour([[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]]);
