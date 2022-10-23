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

function countItem(array, value){
  let n = 0;
  for(let i = 0; i < array.length; i++){
      if(array[i] == value){n++}
  }
  return n;
}


console.log('countItem success:', countItem([1, 2, 3, 4, 5, 4, 4], 4) === 3);

/* =====================
Instructions: Write a function which takes an array and returns a new array with
  only the even items. Copy your definition of isEven from part 1; your
  filterEven function MUST use the isEven function and MUST NOT change the
  original array.
===================== */

function isEven(number){
  if (number % 2 == 0){
      return true;
  } else{
      return false;
  }
}



function filterEven(array){
  let evenArray = [];
  for(let i=0; i<array.length; i++){
    if(isEven(array[i]) == true)
    {evenArray.push(array[i])}
  }
  return evenArray;
}

console.log('filterEven success:', _(filterEven([1, 2, 3, 4, 5, 4, 4])).isEqual([2, 4, 4, 4]));

/* =====================
Instructions: Write a function which takes an array and returns a new array with
  only the odd items. Copy your definition of isOdd from part 1; your filterOdd
  function MUST use the isOdd function and MUST NOT change the original array.
===================== */

function isOdd(number){
  if (number % 2 == 1){
      return true;
  } else{
      return false;
  }
}

function filterOdd(array){
  let oddArray = [];
  for(let i=0; i<array.length; i++){
    if(isOdd(array[i]) == true)
    {oddArray.push(array [i])}
  }
  return oddArray;
}


console.log('filterOdd success:', _(filterOdd([1, 2, 3, 4, 5, 4, 4])).isEqual([1, 3, 5]));

/* =====================
Instructions: Write a function which takes an array and returns a new array with
  each item incremented. Copy your definition of plusOne from part 1; your
  mapIncrement function MUST use the plusOne function and MUST NOT change the
  original array.
===================== */

function plusOne (number){
  return number + 1;
}

function mapIncrement(array){
  let mappedArray = [];
  for(let i=0; i<array.length; i++){
    mappedArray.push(plusOne(array[i]));
  }
  return mappedArray;
}



console.log('mapIncrement success:', _(mapIncrement([1, 2, 3, 4, 5, 4, 4])).isEqual([2, 3, 4, 5, 6, 5, 5]));

/* =====================
Instructions: Write a function which takes an array and returns a new array with
  each item tripled. Copy your definition of timesThree from part 1; your
  mapTriple function MUST use the timesThree function and MUST NOT change the
  original array.
===================== */

function timesThree (number){
  return number * 3;
}


function mapTriple(array){
  let mappedArray = [];
  for(let i=0; i<array.length; i++){
    mappedArray.push(timesThree(array[i]));
  }
  return mappedArray;
}



console.log('mapTriple success:', _(mapTriple([1, 2, 3, 4, 5, 4, 4])).isEqual([3, 6, 9, 12, 15, 12, 12]));

/* =====================
Instructions: Write a function which takes an array and returns the sum of all
  the items in the array. Copy your definition of add from part 1; your
  reduceSum function MUST use the add function and MUST NOT change the original
  array.
===================== */

function add (firstNumber, secondNumber){
  return firstNumber + secondNumber;
}



function reduceSum(array){
  let sum=0;
  for(let i=0; i<array.length; i++){
    sum = add(array[i], sum);
  }
  return sum;
}



console.log('reduceSum success:', reduceSum([1, 2, 3, 4, 5, 4, 4]) === 23);

/* =====================
Instructions: Write a function which takes an array and returns the product of
  all the items in the array. Copy your definition of multiply from part 1; your
  reduceProduct function MUST use the multiply function and MUST NOT change the
  original array.
===================== */


function multiply (firstNumber, secondNumber){
  return firstNumber * secondNumber;
}


function reduceProduct(array){
  let product = 1 ;
  for(let i=0; i<array.length; i++){
    product = multiply(array[i], product)
  }
  return product;
}


console.log('reduceProduct success:', reduceProduct([1, 2, 3, 4, 5, 4, 4]) === 1920);
