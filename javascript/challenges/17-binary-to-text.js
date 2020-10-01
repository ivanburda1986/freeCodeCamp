function binaryAgent(str) {
  let binaries = str.split(' ');
  let decimals = [];
  let letters = [];
  binaries.forEach(binary => {
    decimals.push(parseInt(binary, 2));
  });
  decimals.forEach(decimal => {
    letters.push(String.fromCharCode(decimal));
  })
  return letters.join('');
}


console.log(binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"));


//Slice, splice, split
//https: //www.freecodecamp.org/news/lets-clear-up-the-confusion-around-the-slice-splice-split-methods-in-javascript-8ba3266c29ae/