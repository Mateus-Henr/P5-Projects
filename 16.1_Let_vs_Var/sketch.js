function setup() {
  for (var i = 0; i < 1; i++) {
    console.log(i);
  }

  console.log(i); // Can see the variable

  for (let j = 0; j < 1; j++) {
    console.log(j);
  }

  console.log(j); // Can't see the variable
}

// When using "var" the ES6 declared the variables first. They are available for the entire function.

// Default code
//
// for(var i = 0; i < 10; I ++) {
//  do something!
// }

// What would happen if you're using var
// var i = 0; -> Defined by ES6
// for (i = 0; i < 10; I ++) {
//  do something!
// }
// Here "i"  has the same value in the entire code, because it's a global variable.

// What would happen if you're using let
// for (let i = 0; i < 10; I ++) {
//  do something!
// }
// Here "i" has the same value just inside the for, because it's a local variable.

function doNotExecute() {
  console.log(x); // Not Defined
  var x = 10;
  console.log(x);

  console.log(y); // Error
  let y = 10;
  console.log(y);
}
