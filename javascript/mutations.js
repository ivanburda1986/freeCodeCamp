const lowercaseWords = (arrayOfWords) => {
  const lowerCasedWords = [];
  for (let i = 0; i < arrayOfWords.length; i += 1) {
    lowerCasedWords.push(arrayOfWords[i].toLowerCase());
  }
  return (lowerCasedWords);
};

function mutation(arr) {
  const source = lowercaseWords(arr[0].split(''));
  const sample = lowercaseWords(arr[1].split(''));
  let includesAll = true;
  for (let i = 0; i < sample.length; i += 1) {
    if (source.includes(sample[i])) {
      includesAll = true;
    } else {
      includesAll = false;
      break;
    }
  }
  return (includesAll);
}

mutation(['hello', 'Hello']);
