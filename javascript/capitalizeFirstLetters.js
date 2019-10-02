const getArrayOfWords = (sentence) => {
  const arrayOfWords = sentence.split(' ');
  return (arrayOfWords);
};

const lowercaseWords = (arrayOfWords) => {
  const lowerCasedWords = [];
  for (let i = 0; i < arrayOfWords.length; i += 1) {
    lowerCasedWords.push(arrayOfWords[i].toLowerCase());
  }
  return (lowerCasedWords);
};

const capitalizeFirstLetter = (lowerCasedWords) => {
  const wordsWithFirstUpperCase = [];
  for (let i = 0; i < lowerCasedWords.length; i += 1) {
    const firstLeterCapitalized = (lowerCasedWords[i].substring(0, 1)).toUpperCase();
    const restOfWord = lowerCasedWords[i].substring(1);
    wordsWithFirstUpperCase.push(firstLeterCapitalized + restOfWord);
  }
  return (wordsWithFirstUpperCase);
};

const assembleSentence = (wordsWithFirstUpperCase) => {
  let assembledSentence = '';
  for (let i = 0; i < wordsWithFirstUpperCase.length; i += 1) {
    assembledSentence += `${wordsWithFirstUpperCase[i]} `;
  }
  assembledSentence = assembledSentence.substring(0, assembledSentence.length - 1);
  return (assembledSentence);
};

function titleCase(str) {
  const arrayOfWords = getArrayOfWords(str);
  const lowerCasedWords = lowercaseWords(arrayOfWords);
  const wordsWithFirstUpperCase = capitalizeFirstLetter(lowerCasedWords);
  const assembledSentence = assembleSentence(wordsWithFirstUpperCase);
  return (assembledSentence);
}

titleCase("I'm a little tea pot");
titleCase("I'm a little tea pot"); // should return I'm A Little Tea Pot.
titleCase('sHoRt AnD sToUt'); // should return Short And Stout
titleCase('HERE IS MY HANDLE HERE IS MY SPOUT'); // should return Here Is My Handle Here Is My Spout