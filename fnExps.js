"use strict";

/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser
 */
module.exports = { double, times100, myMap, triples, arrowTriples }; //add all of your function names here that you need for the node mocha tests

/**
 *@returns {number} double the input
 */
function double(number) {
  let numberDouble;
  numberDouble = number * 2;

  return numberDouble;
}

/**
 * @returns {number} 100 times the input
 */
function times100(number) {
  let numberHundres;

  numberHundres = number * 100;

  return numberHundres;
}

/**
 * @returns {Array} creates a new array with function mapped to each element
 */
function triples(arr) {
  let newArr = [];

  for (let i = 0; i < arr.length; i++) {
    newArr.push(arr[i] * 3);
  }

  return newArr;
}

/**
 * @returns {Array} creates a new array with function mapped to each element
 */
let arrowTriples = (arr) => {
  let newArr = [];

  for (let i = 0; i < arr.length; i++) {
    newArr.push(arr[i] * 3);
  }

  return newArr;
};

/**
 * @returns {Array} creates a new array with function mapped to each element
 */
function myMap(arr, func) {
  let arrayFunc = [];
  if (func == double || func == times100) {
    for (let i = 0; i < arr.length; i++) {
      arrayFunc.push(func(arr[i]));
    }
  } else if (func == triples) {
    arrayFunc.push(func(arr));
  } else {
    arrayFunc.push(func(arr));
  }

  return arrayFunc;
}
// console.log("douple " + myMap([-10, 0, 10, 20], double));
// console.log("times100 " + myMap([-10, 0, 10, 20], times100));
// console.log("triples " + myMap([-10, 0, 10, 20], triples));
// console.log("arrowTriples " + myMap([-10, 0, 10, 20], arrowTriples));
// !!! With the arrow function, it makes errors during testing, otherwise it works.
