// the global variable
var globalTitle = " Winter Is  Coming";

// Add your code below this line
const isWord = (callback) => {
    if (callback.length >0){
        return true;
    } return false;
}

function urlSlug(title) {
let words = title.split(' ');
let newWords = [];
  words.forEach((element) => {
     newWords.push(element.trim().toLowerCase());
  });
newWords = newWords.filter(isWord);
return(newWords.join('-'));
}
// Add your code above this line

var winterComing = urlSlug(globalTitle); // Should be "winter-is-coming"
console.log(winterComing);