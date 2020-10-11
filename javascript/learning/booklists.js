let bookList = ['The Hound of the Baskervilles', 'On The Electrodynamics of Moving Bodies', 'Philosophiæ Naturalis Principia Mathematica', 'Disquisitiones Arithmeticae'];

function add(inputBookList, bookName) {
  const newBooklist = [...inputBookList];
  newBooklist.push(bookName);
  return (newBooklist);

  // Add your code above this line
}

function remove(inputBookList, bookName) {
  let newerBookList = [...inputBookList];
  if (inputBookList.indexOf(bookName) >= 0) {
    const positionToRemove = newerBookList.indexOf(bookName);
    const beginning = newerBookList.splice(0, positionToRemove);
    const ending = newerBookList.splice(positionToRemove);
    newerBookList = beginning.concat(ending);
    return (newerBookList);
    // Add your code above this line
  }
}

var newestBookList = remove(add(bookList, 'A Brief History of Time'), 'On The Electrodynamics of Moving Bodies');