function palindrome(str) {
  let expr = str;
  //Make everything small case
  expr = expr.toLowerCase();

  //Remove non-alphanumerical characters and spacing
  let regex = /_*\s*\W*/g;
  expr = expr.replace(regex, "");

  //Create a reversed expression
  let reversedExpr = [...expr].reverse().join("");

  console.log(expr);
  console.log(reversedExpr);

  //Compare expression to the reveserd expression
  return expr === reversedExpr ? true : false;
}

console.log(palindrome("_eye"));
console.log(palindrome("0_0 (: /- :) 0-0"));

// http://regexrenamer.sourceforge.net/help/regex_quickref.html
