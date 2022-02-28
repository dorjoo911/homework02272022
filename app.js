// /**
//  * @param {Function} func is any number
//  * @param {Object} arg is any number
//  * @returns {undefined}
//  */
// function myCallback(func, arg) {
//   console.log("return val is: ", returnVal);
// }

// /**
//  * @param {number} num is any number
//  * @returns {number} cube of num
//  */

// function cube(num) {
//   return num * num * num;
// }

// myCallback(cube, 10);
// myCallback((num) => num * num * num, 5);

let myArray = [1, 2, 3, 4];
let anotherArray = [10, 11, 12];
console.log(myArray[0]);
myArray = anotherArray; // array can get another array
console.log(myArray[0]);
console.log(myArray.length);

function hi(name) {
  return "Hi " + name;
}
let goodBye = function () {
  return "Good Bye";
};
console.log(hi("Developer", "Welcome"));
console.log(goodBye("Developer"));
console.log(goodBye);
console.log(goodBye());

console.log(
  typeof 10n, // "bigint"
  typeof true, // "boolean"
  typeof "foo"
);
let arr = ["a", 2, true];
const numbers = new Array(6);
console.log(numbers);

let x = 5;
let y = "7";
let test = true;

let result = x + y;
console.log(result, typeof result);

result = x + test;
console.log(result, typeof result);

result = test + y;
console.log(result, typeof result);

result = y * 2;
console.log(result, typeof result);

result = x < y;
console.log(result, typeof result);

result = y + x;
console.log(result, typeof result);

let a = "3";
let b = 3;
result = a === b;
console.log(result, typeof result + " strict");

result = a == b;
console.log(result, typeof result + " no type");

result = undefined;
console.log(result, typeof result + " any");

result = [7] === [7];
console.log(result, typeof result);
