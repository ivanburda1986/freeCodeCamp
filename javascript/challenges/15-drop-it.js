function dropElements(arr, func) {
  let evaluation = [];
  arr.forEach(number => {
    evaluation.push(func(number));
  });
  if (evaluation.indexOf(true) === -1) {
    return [];
  } else {
    return arr.slice(evaluation.indexOf(true));
  }
}




console.log(dropElements([1, 2, 3, 9, 2], function (n) {
  return n > 2;
}));