const isWord = (callback) => {
  if (callback.length > 0) {
    return true;
  } return false;
};



const normalize = (string) => {
  const stringChars = string.split('');
    stringChars.forEach(element => {
        if(element === element.toUpperCase()){
           stringChars.splice(stringChars.indexOf(element), 0, "");
        }
    })
    console.log(stringChars);
};

function spinalCase(str) {
  const words = str.split(' ');
  let newWords = [];
  words.forEach((element) => {
    newWords.push(element.trim().toLowerCase());
  });
  newWords = newWords.filter(isWord);
  console.log(newWords.join('-'));
}

spinalCase('This Is Spinal Tap');
spinalCase('thisIsSpinalTap');
