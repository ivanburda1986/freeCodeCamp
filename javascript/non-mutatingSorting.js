var globalArray = [5, 6, 3, 2, 9];
function nonMutatingSort(arr) {
  // Add your code below this line
  let myArray = [].concat(arr);
  myArray.sort(function(a,b){
    return a-b;
  });
  return myArray;
  // Add your code above this line
}

console.log(nonMutatingSort(globalArray));
console.log(globalArray);
