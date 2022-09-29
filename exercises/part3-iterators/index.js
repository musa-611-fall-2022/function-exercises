/* globals _ */
/* eslint no-unused-vars:off */

/* =====================
# Exercise: Iterators

A core part of data manipulation in JavaScript is looping over values in an
array and performing some operations on those values. In this exercise we will
practice some of the most common types of iterative operations.

Functions that `return` can be passed as values to other functions. Each exercise here builds on that theme.
===================== */

/* =====================
Instructions: Write a function which counts the number of times a value occurs in an array
Example: countItem(['a', 'b', 'a'], 'a') should return 2
===================== */

let countItem = (arr, item) => {
  let count = 0;
  for (let i=0; i < arr.length; i++) {
    if (arr[i] === item){
      count++;
    }
  }
  return count;
};

console.log('countItem success:', countItem([1, 2, 3, 4, 5, 4, 4], 4) === 3);

/* =====================
Instructions: Write a function which takes an array and returns a new array with
  only the even items. Copy your definition of isEven from part 1; your
  filterEven function MUST use the isEven function and MUST NOT change the
  original array.
===================== */

let isEven = (x) => {
  if (typeof x == "number"){
      return (x%2 === 0)
  } else {
      return ("NA")
  }
};

let filterEven = (arr) => {
  let evenArr = [];
  for (let i=0; i < arr.length; i++) {
    if (isEven(arr[i]) == true){
      evenArr.push(arr[i]);
    }
  }
  return evenArr;
};

console.log('filterEven success:', _(filterEven([1, 2, 3, 4, 5, 4, 4])).isEqual([2, 4, 4, 4]));

/* =====================
Instructions: Write a function which takes an array and returns a new array with
  only the odd items. Copy your definition of isOdd from part 1; your filterOdd
  function MUST use the isOdd function and MUST NOT change the original array.
===================== */

let isOdd = (x) => {
  if (typeof x == "number"){
      return (x%2 !== 0 && x !== 0)
  } else {
      return ("NA")
  }
};

let filterOdd = (arr) => {
  let oddArr = [];
  for (let i=0; i < arr.length; i++) {
    if (isOdd(arr[i]) == true){
      oddArr.push(arr[i]);
    }
  }
  return oddArr;
};

console.log('filterOdd success:', _(filterOdd([1, 2, 3, 4, 5, 4, 4])).isEqual([1, 3, 5]));

/* =====================
Instructions: Write a function which takes an array and returns a new array with
  each item incremented. Copy your definition of plusOne from part 1; your
  mapIncrement function MUST use the plusOne function and MUST NOT change the
  original array.
===================== */

let plusOne = (n) => {
  return n + 1;
};

let mapIncrement = (arr) => {
  let incArr = arr;
  return incArr.map(x => plusOne(x));
};

console.log('mapIncrement success:', _(mapIncrement([1, 2, 3, 4, 5, 4, 4])).isEqual([2, 3, 4, 5, 6, 5, 5]));

/* =====================
Instructions: Write a function which takes an array and returns a new array with
  each item tripled. Copy your definition of timesThree from part 1; your
  mapTriple function MUST use the timesThree function and MUST NOT change the
  original array.
===================== */

let timesThree = (x) => {
  return x*3;
};

let mapTriple = (arr) => {
  let tripArr = arr;
  return tripArr.map(x => timesThree(x));
};

console.log('mapTriple success:', _(mapTriple([1, 2, 3, 4, 5, 4, 4])).isEqual([3, 6, 9, 12, 15, 12, 12]));

/* =====================
Instructions: Write a function which takes an array and returns the sum of all
  the items in the array. Copy your definition of add from part 1; your
  reduceSum function MUST use the add function and MUST NOT change the original
  array.
===================== */

let add = (n1, n2) => {
  return n1 + n2;
};

let reduceSum = (arr) => {
  const sum = arr;
  return sum.reduce((acc, cur) => add(acc, cur))
};

console.log('reduceSum success:', reduceSum([1, 2, 3, 4, 5, 4, 4]) === 23);

/* =====================
Instructions: Write a function which takes an array and returns the product of
  all the items in the array. Copy your definition of multiply from part 1; your
  reduceProduct function MUST use the multiply function and MUST NOT change the
  original array.
===================== */

let multiply = (n1, n2) => {
  return n1*n2;
};

let reduceProduct = (arr) => {
  const product = arr;
  return product.reduce((acc, cur) => multiply(acc, cur))
};

console.log('reduceProduct success:', reduceProduct([1, 2, 3, 4, 5, 4, 4]) === 1920);