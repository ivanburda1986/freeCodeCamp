function sumFibs(num) {
  let fnums = [0, 1];
  let sum = 0;
  if (num === 1 || num === 2) {
    fnums.forEach((num) => (sum = sum + num));
    return sum;
  } else {
    while (fnums[fnums.length - 1] <= num) {
      fnums.push(fnums[fnums.length - 2] + fnums[fnums.length - 1]);
    }
    fnums.forEach((number) => {
      if (number % 2 === 0) {
        fnums.splice(fnums.indexOf(number), 1);
      }
    });
    fnums.pop();
    function getSum(total, num) {
      return total + num;
    }
    return fnums.reduce(getSum, 0);
  }
}

sumFibs(10);
