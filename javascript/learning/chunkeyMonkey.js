function chunkArrayInGroups(arr, size) {
  const inputArray = arr;
  const newArray = [];
  while (inputArray.length > 0) {
    newArray.push(inputArray.splice(0, size));
  }
  return (newArray);
}


chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4); // should return [[0, 1, 2, 3], [4, 5]]
