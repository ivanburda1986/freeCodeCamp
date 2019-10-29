// the global variable
var globalTitle = "Winter Is Coming";

// Add your code below this line
function urlSlug(title) {
const words = title.split(" ");
words.array.forEach(element => {
    element.toLowerCase();
});
console.log(words);
}
// Add your code above this line

var winterComing = urlSlug(globalTitle); // Should be "winter-is-coming"
console.log(winterComing);