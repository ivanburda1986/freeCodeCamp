function uniteUnique(arr) {
  let set = new Set();
  [...arguments].forEach((array) => {
    array.forEach((item) => {
      set.add(item);
    });
  })
  return Array.from(set);
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
uniteUnique([1, 2, 3], [5, 2, 1]);
uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]);


//Also a very good solution from FCC forum:
// function uniteUnique(...arrays) {
//   //make an array out of the given arrays and flatten it (using the spread operator)
//   const flatArray = [].concat(...arrays);

//   // create a Set which clears any duplicates since it's a regulat set and not a multiset
//   return [...new Set(flatArray)];
// }