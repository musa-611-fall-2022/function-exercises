/* globals _, plusOne, timesThree, add, multiply, isEven, isOdd */
/* eslint no-unused-vars:off */

/* =====================
# Exercise: Functions As Values (i.e., Higher Order Functions)

Functions that `return` can be passed as values to other functions. Each
exercise here builds on that theme. We're going to be re-implementing a few
core methods that exist on arrays (without using those functions): filter, map,
and reduce.
===================== */

/* =====================
Instructions: Write a function which takes an array and returns a new array,
  filtered according to a "predicate" that you procide (a predicate is a
  function that takes one item as input and returns either true or false based
  on whether the item satisfies some condition).
===================== */
resultsArray = [];

// Function containing logic for filtering out odd numbers

function isOdd(x) {
  return x % 2 != 0;
}

// Function containing logic for filtering out even numbers

function isEven(x) {
  return x % 2 === 0;
}


function filter(arr, func) {
  const filteredArr = [];
  for (let i = 0; i < arr.length; i++) {
    func(arr[i]) ?  filteredArr.push(arr[i]) : null;
  }
  return filteredArr;
}

console.log('filter success #1:', _(filter([1, 2, 3, 4, 5, 4, 4], isEven)).isEqual([2, 4, 4, 4]));
console.log('filter success #2:', _(filter([1, 2, 3, 4, 5, 4, 4], isOdd)).isEqual([1, 3, 5]));

/* =====================
Instructions: Write a function which takes an array and returns a new array,
  where each item has a function applied to it.
===================== */
function plusOne (number){
  return number + 1;
}

function timesThree (number){
  return number * 3;
}



let map = (arr, func) => {
  let mappedArr=[];
  for (let i = 0; i < arr.length; i++) {
   mappedArr.push(func(arr[i]))
  }
  return mappedArr;
};

console.log('map success #1:', _(map([1, 2, 3, 4, 5, 4, 4], plusOne)).isEqual([2, 3, 4, 5, 6, 5, 5]));
console.log('map success #2:', _(map([1, 2, 3, 4, 5, 4, 4], timesThree)).isEqual([3, 6, 9, 12, 15, 12, 12]));

/* =====================
Instructions: Write a function which takes an array and returns the value of
  applying a "reducer". A reducer takes two arguments and produces a single
  result. The reduce function will call the reducer function on each element of
  the array, in order, passing in the return value from the calculation on the
  preceding element. The final result of running the reducer across all elements
  of the array is a single value.

  For example, if our reducer is the `add` function and we use an initial value
  of 0, the result of `reduce([1, 3, 5, 7], add, 0)` would be:

         initial     current     returns
         -------     -------     -------
    add(    0     ,     1   ); //   1
    add(    1     ,     3   ); //   4
    add(    4     ,     5   ); //   9
    add(    9     ,     7   ); //   16  <-- final reduced value

===================== */


function add(arr,initial){
  console.log("calling add");
  result = initial;
  console.log("setting result to: " + initial);
  for(i=0; i<arr.length; i++){
    console.log("iteration -----------------" + i);
    console.log("current result: " + result )
    result = arr[i] + result;
    console.log("new result: " + result);
  }

  console.log("Final result: " + result);
  return result;
};

function multiply(arr,initial){
  result = initial;
  for(i=0; i<arr.length; i++){
    result = arr[i] * result;
  }
  return result;
};

let reduce = (arr, func, initial) => {
  result = func(arr,initial);
  return result;
};



console.log('reduce success #1:', reduce([1, 2, 3, 4, 5, 4, 4], add, 0) === 23);
console.log('reduce success #2:', reduce([1, 2, 3, 4, 5, 4, 4], multiply, 1) === 1920);
/*console.log('reduce success #3:', _(reduce([1, 2, 3, 4, 5, 4, 4], (x, y) => [y, ...x], [])).isEqual([4, 4, 5, 4, 3, 2, 1]));*/

/* =====================
Bonus: Create a function called sumSquares that takes an array and returns
  the sum of each item in the array squared. TRY TO ONLY USE THE MAP AND REDUCE
  FUNCTIONS ABOVE -- NO VARIABLE DEFINITIONS (you can also reuse the `add` and
  `multiply` functions that you developed before).
===================== */

let sumSquares = (arr) => {};

console.log('sumSquares success:', sumSquares([1, 2, 3, 4]) === 30);
