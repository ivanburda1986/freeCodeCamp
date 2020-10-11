// Only change code below this line
function countdown (myArray, n){
  let pole = myArray;
  if(n <= 0){
    return (pole);
  }
  pole = countdown (myArray, n-1);
  pole.unshift(n);
  return (pole);
}

console.log(countdown([], 10));