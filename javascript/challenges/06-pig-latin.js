function translatePigLatin(str) {
  const vowels = ["a", "e", "i", "o", "u"];
  const letters = [...str];
  let result;
  let vowelPositions = [];
  let firstVowelPosition;
  // If a word begins with a vowel, just add "way" at the end.
  if (vowels.includes(letters[0])) {
    letters.push("way");
    result = letters.join("");
  }
  // If a word begins with a consonant, take the first consonant or consonant cluster, move it to the end of the word, and add "ay" to it.
  else {
    // Find out 1st vowel position in the word
    vowels.forEach((vowel) => {
      if (letters.includes(vowel)) {
        vowelPositions.push(letters.indexOf(vowel));
      }
    });
    //Words without any vowels
    if (vowelPositions.length === 0) {
      //Add "ay" to the modified array
      letters.push("ay");
      result = letters.join("");
    }
    //Words with at least 1 vowel
    else {
      vowelPositions.sort((a, b) => a - b);
      firstVowelPosition = vowelPositions[0];
      // Copy all chars preceeding the 1st vowel position
      let preceedingTheVowel = letters.slice(0, firstVowelPosition);
      // Remove from the original array the chars preceeding the 1st vowel position
      letters.splice(0, firstVowelPosition);
      // Append to the modified array the charts removed from its front before the 1st vowel position
      letters.push(...preceedingTheVowel);
      //Add "ay" to the modified array
      letters.push("ay");
      result = letters.join("");
    }
  }
  return result;
}

console.log(translatePigLatin("california"));
console.log(translatePigLatin("paragraphs"));
console.log(translatePigLatin("glove"));
console.log(translatePigLatin("algorithm"));
console.log(translatePigLatin("eight"));
console.log(translatePigLatin("schwartz"));
console.log(translatePigLatin("rhythm"));

//For regex-based solution check https://youtu.be/jSWT8myUYEY at 31:20
