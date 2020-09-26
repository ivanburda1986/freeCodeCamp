function fearNotLetter(str) {
  let alphabet = "abcdefghijklmnopqrstuvwxyz";
  let alphabetFragment = alphabet.slice(alphabet.indexOf(str.charAt(0)), alphabet.indexOf(str.charAt(str.length - 1)) + 1);
  let missingLetter;
  [...alphabetFragment].forEach((letter) => {
    if (![...str].includes(letter)) {
      missingLetter = letter;
    }
  });
  console.log(missingLetter);
}

fearNotLetter("abce");
fearNotLetter("abcdefghjklmno");
fearNotLetter("stvwx");
fearNotLetter("bcdf");
fearNotLetter("abcdefghijklmnopqrstuvwxyz");