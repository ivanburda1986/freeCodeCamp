function translatePigLatin(str) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  const letters = [...str];
  let result;
  let vowelPosition = -1;
  // If a word begins with a vowel, just add "way" at the end.
  if (vowels.includes(letters[0])) {
    letters.push('way');
    result = letters.join('');
  } else {
    // If a word begins with a consonant, take the first consonant or consonant cluster, move it to the end of the word, and add "ay" to it.
    // Find out 1st vowel position in the word
    if (vowelPosition < 0) {
      vowels.forEach((vowel) => {
        if (letters.includes(vowel)) {
          vowelPosition = letters.indexOf(vowel);
        }
      });
    }


  }
  return result;

}

console.log(translatePigLatin('california'));
console.log(translatePigLatin('paragraphs'));
console.log(translatePigLatin('glove'));
console.log(translatePigLatin('algorithm'));
console.log(translatePigLatin('eight'));
console.log(translatePigLatin('schwartz'));
console.log(translatePigLatin('rhythm'));