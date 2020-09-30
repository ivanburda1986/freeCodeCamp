function steamrollArray(arr) {
  let result = [];
  flatten(arr);
  function flatten(input) {
    input.forEach((el) => {
      if (Array.isArray(el)) {
        flatten(el);
      } else {
        result.push(el);
      }
    });
  }
  return result;
}

steamrollArray([[["a"]], [["b"]]]);
steamrollArray([1, [2], [3, [[4]]]]);
steamrollArray([1, [], [3, [[4]]]]);
steamrollArray([1, {}, [3, [[4]]]]);
