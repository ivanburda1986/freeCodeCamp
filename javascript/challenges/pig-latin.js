function translatePigLatin(str) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  let letters = [...str];
  if (!vowels.includes(letters[0])) {
    let firstConsonantPosition;
    let i = 0;
    while (!vowels.includes(letters[i])) {
      firstConsonantPosition = letters.indexOf(letters[i]);
      i += 1;
    }
    let arrayCutOff = letters.splice(0, firstConsonantPosition + 1);
    let result = [...letters.slice(firstConsonantPosition), ...arrayCutOff, 'a', 'y'];
    letters = result;
  } else {
    const removed = letters.shift();
    letters.shift();
    letters.push(removed);
    letters.push('way');
  }
  return (letters.join(''));
}

console.log(translatePigLatin('algorithm'));


// If a,e,i,o,u at the first position -> add 'way' to the end
/* If begins with a consonant
   -find out position of the first vowel
   -take everything before the first vowel and push it to the end
   -push 'ay' to the end
*/