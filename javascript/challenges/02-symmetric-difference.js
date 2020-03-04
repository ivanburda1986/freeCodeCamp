const compare = (value, array) => {
  if (array.indexOf(value) > -1) {
    return true;
  }
  return false;
};

function diffArray(arr1, arr2) {
  const newArr = [];
  for (let i = 0; i < arr1.length; i += 1) {
    if (!compare(arr1[i], arr2)) {
      newArr.push(arr1[i]);
    }
  }
  for (let i = 0; i < arr2.length; i += 1) {
    if (!compare(arr2[i], arr1)) {
      newArr.push(arr2[i]);
    }
  }
  console.log (newArr);
}


diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]); // should return [4].
diffArray([1, 'calf', 3, 'piglet'], [7, 'filly']); // should return [1, "calf", 3, "piglet", 7, "filly"].
