
function whatIsInAName(collection, source) {
  let matching = [];
  for (let i = 0; i < collection.length; i += 1) {
    if (Object.entries(source).every(([key, value]) => (collection[i].hasOwnProperty(key) && collection[i][key] === value))) {
      matching.push(collection[i]);
    }
  }
  return(matching);
}

whatIsInAName([{ first: 'Romeo', last: 'Montague' }, { first: 'Mercutio', last: null }, { first: 'Tybalt', last: 'Capulet' }], { last: 'Capulet' });
