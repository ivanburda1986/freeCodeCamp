function telephoneCheck(str) {
  let regex = /^(1\s|1)?([0-9]{3}|\([0-9]{3}\))(-|\s)?[0-9]{3}(-|\s)?[0-9]{4}$/;
  return (regex.test(str));
}

console.log(telephoneCheck("555-555-5555"));

//A great regex learning resource: https://regexone.com/