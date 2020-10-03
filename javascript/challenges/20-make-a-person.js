var Person = function (firstAndLast) {
  // Only change code below this line
  // Complete the method below and implement the others similarly
  let firstName;
  let lastName;
  this.setFirstName = function (first) {
    return (firstName = first);
  };
  this.setLastName = function (last) {
    return (lastName = last);
  };
  this.setFullName = function (whole) {
    firstName = whole.split(" ")[0];
    lastName = whole.split(" ")[1];
  };
  this.getFirstName = function () {
    return firstName;
  };
  this.getLastName = function () {
    return lastName;
  };
  this.getFullName = function () {
    return `${firstName} ${lastName}`;
  };
  this.setFullName(firstAndLast);
};

var bob = new Person("Bob Ross");
bob.getFullName();
