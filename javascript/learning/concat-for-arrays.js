function nonMutatingPush(original, newItem) {
    // Add your code below this line
    let newArray;
    newArray = original.concat(newItem);
   return (newArray);
  
    // Add your code above this line
  }
  var first = [1, 2, 3];
  var second = [4, 5];
  nonMutatingPush(first, second);