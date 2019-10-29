const people = [
  {
    name: "Dom",
    age: 55
  },
  {
    name: "Sophie",
    age: 96
  },
  {
    name: "Mark",
    age: 27
  }
]

console.log(people.sort(function(a,b){
  return a.age-b.age;
}));

function alphabeticalOrder(arr) {
  // Add your code below this line
  console.log(arr.sort(function(a,b){
    return a-b;
  }));
  // Add your code above this line
}
alphabeticalOrder(["a", "d", "c", "a", "z", "g"]);
