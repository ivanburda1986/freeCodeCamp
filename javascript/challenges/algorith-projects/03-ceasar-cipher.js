let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZ".split('');

function rot13(str) {
  let input = str.split('');
  let result = [];
  input.forEach(char => {
    if (alphabet.indexOf(char) >= 0) {
      result.push(alphabet[alphabet.indexOf(char) + 13]);
    } else {
      result.push(char);
    }
  })

  return(result.join(''));
}

rot13("SERR PBQR PNZC");
rot13("SERR CVMMN!")
rot13("SERR YBIR?")
rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.")