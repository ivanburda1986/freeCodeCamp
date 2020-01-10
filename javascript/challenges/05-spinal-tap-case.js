function spinalCase(str) {
// const regex = /\s+/g;
let chars = str.split("");
chars[0] = chars[0].toLowerCase();

for(element in chars) {
  if (chars[element] === " " || chars[element] === "_"){
    chars[element] = "-";
    }
  };

for (element in chars){
  let regex = /[a-z]/g;
  if (chars[element] === chars[element].toUpperCase()){
      if(regex.test(chars[element-1])){
        chars.splice(element-1, 0, "-");
      }
    }
  }
  return chars;
}

console.log(spinalCase('This Is Spinal Tap'));
console.log(spinalCase('thisIsSpinalTap'));
console.log(spinalCase('The_Andy_Griffith_Show'));
console.log(spinalCase('Teletubbies say Eh-oh'));
console.log(spinalCase('AllThe-small Things'));

/*
;

*/