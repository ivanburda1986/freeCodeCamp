function smallestCommons(arr) {
  let arg1Multiples = [];
  let arg2Multiples = [];
  let betweeners = [];

  function getBetweeners() {
    let numbers = arr.sort((a, b) => a - b);
    for (let i = numbers[0] + 1; i < numbers[1]; i++) {
      betweeners.push(i);
    }
  };
  getBetweeners();




  console.log(betweeners);
}


smallestCommons([1, 6]);