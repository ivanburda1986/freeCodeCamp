function diffArray(arr1, arr2) {
  console.log(arr1.concat(arr2).filter(item => !arr1.includes(item) || !arr2.includes(item)));
}


diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]); //  should return [4].
diffArray([1, 'calf', 3, 'piglet'], [7, 'filly']); // should return [1, "calf", 3, "piglet", 7, "filly"].
