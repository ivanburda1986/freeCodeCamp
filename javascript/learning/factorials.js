function factorialize(num) {
  let includeThese = [];
  let factorialized = 1;
  for (let i = 1; i <= num; i++) {
    includeThese.push(i); 
  }
  for (let j = 0; j < includeThese.length; j++) {
    factorialized = factorialized * includeThese[j];
  }
  return factorialized;
}

factorialize(5);
