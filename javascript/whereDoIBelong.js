const sortNumbers = (numbers) => {
  const sortedNumbers = numbers.sort((a, b) => a - b);
  return (sortedNumbers);
};

function getIndexToIns(arr, num) {
  const sortedNumbers = sortNumbers(arr);
  let position;
  if (arr.length === 0) {
    position = 0;
  } else if (num <= sortedNumbers[0]) {
    position = 0;
  } else {
    for (let i = 0; i < sortedNumbers.length; i += 1) {
      if (num > sortedNumbers[i]) {
        position = i + 1;
      }
    }
  }
  return (position);
}

getIndexToIns([10, 20, 30, 40, 50], 35);
getIndexToIns([10, 20, 30, 40, 50], 30);
getIndexToIns([40, 60], 50);
getIndexToIns([3, 10, 5], 3);
getIndexToIns([5, 3, 20, 3], 5);
getIndexToIns([2, 20, 10], 19);
getIndexToIns([2, 5, 10], 15);
getIndexToIns([], 1);
