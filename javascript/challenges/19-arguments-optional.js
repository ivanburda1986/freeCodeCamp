function addTogether() {
  let inputs = [...arguments];
  //Check that all provided arguments are valid and return "undefined" if not
  let inputTypes = [...arguments].map((element) => typeof element);
  let countOfNanInputs = 0;
  inputTypes.forEach((element) => {
    if (element !== "number") {
      countOfNanInputs += 1;
    }
  });
  if (countOfNanInputs !== 0) {
    return undefined; //If all provided arguments are not numbers then the code ends here
  }
  //If only 1 arguments is provided and it is valid return a function
  if (inputTypes.length === 1) {
    function addTogether(giveMeNumber) {
      // Also at the level of this function I need to check the input type
      if (typeof giveMeNumber !== "number") {
        //if not a number return undefined
        return undefined;
      } else {
        return inputs[0] + giveMeNumber; //if a number then return the sum
      }
    }
    return addTogether;
  }
  //If 2 arguments is provided and both are valid return a sum
  return parseInt(inputs[0]) + parseInt(inputs[1]);
}

console.log(addTogether(2)([3]));
