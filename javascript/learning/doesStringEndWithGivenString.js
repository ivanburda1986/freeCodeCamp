function giveSuperstring (string) {
  let allInputStringLetters = string.split(' ');
  let superstring = '';
  for (let i = 0; i < allInputStringLetters.length; i += 1) {
    superstring += allInputStringLetters[i];
  }
  return superstring;
}

function confirmEnding(str, target) {
  let superstring = giveSuperstring(str);
  let lengthOfSuperstring = superstring.length;
  let lenghtOfTargetString = target.length;
  let superStringPartToCompare = lengthOfSuperstring - lenghtOfTargetString
  let endToCompare = superstring.substring(superStringPartToCompare);
  if (endToCompare === target) {
    return true;
  }
}
  
confirmEnding("Bastian", "n");
confirmEnding("Congratulation", "on")
confirmEnding("Connor", "n")
confirmEnding("Walking on water and developing software from a specification are easy if both are frozen", "specification")
confirmEnding("He has to give me a new name", "name")
confirmEnding("Open sesame", "same");
confirmEnding("Open sesame", "pen")
confirmEnding("Open sesame", "game")
confirmEnding("If you want to save our world, you must hurry. We dont know how much longer we can withstand the nothing", "mountain")
confirmEnding("Abstraction", "action")