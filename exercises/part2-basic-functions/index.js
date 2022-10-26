/* eslint no-unused-vars:off */

/* =====================
# Exercise: Basic Functions

Let's get a little more practice writing functions (we'll be using some of these
functions later on too ;-).
===================== */

/* =====================
Instructions: Write a function, age, that takes a birth year and returns an age
in years. (Let's just assume this person was born January 1 at 12:01 AM)
Example: "age(2000) should return 22"
===================== */

/*function agePrompt (){
    let birthYear = prompt("What year were you born?", "YYYY");
    let ageYears = 2022 - birthYear;
    alert(`You are ${ageYears} years old, I think.`);
}*/

function age(birthYear){
    return 2022 - birthYear;
}

/*age();*/

/*let age = (birthYear) => {};*/

console.log('age success:', age(1971) === 51);

/* =====================
Instructions: Write a function that adds one to the number provided
Example: "plusOne(2) should return 3"
===================== */

/* function addOnePrompt (){
    let numberString = prompt("What number would you like to add 1 to?");
    let number = Number(numberString);
    let newNumber = number + 1;
    alert(`${number} + 1 = ${newNumber}`);
} */


function plusOne (number){
    return number + 1;
}


/*addOne();*/

/* =====================
Instructions: Write a function that multiplies the number provided by three
Example: "timesThree(2) should return 6"
===================== */

/*function multiplyThreePrompt (){
    let numberString = prompt("What number would you like to multiply 3 by?");
    let number = Number(numberString);
    let newNumber = number * 3;
    alert(`${number} * 3 = ${newNumber}`);
}*/



function timesThree (number){
    return number * 3;
}

/*multiplyThree();*/

/* =====================
Instructions: Write a function that adds two given numbers
Example: "add(2, 3) should return 5"
===================== */

/*function numberAdderPrompt (){
    let firstNumberString = prompt("What is the first number you want to add?");
    let firstNumber = Number(firstNumberString);
    let secondNumberString = prompt(`What is the number you want to add to ${firstNumberString}?`);
    let secondNumber = Number(secondNumberString);
    let result = firstNumber + secondNumber;
    alert(`${firstNumber} + ${secondNumber} = ${result}`);
}*/



function add (firstNumber, secondNumber){
    return firstNumber + secondNumber;
}

/*numberAdder();*/

/* =====================
Instructions: Write a function that multiplies two given numbers
Example: "multiply(2, 3) should return 6"
===================== */

/* function numberMultiplier (){
    let firstNumberString = prompt("What is the first number you want to multipy?");
    let firstNumber = Number(firstNumberString);
    let secondNumberString = prompt(`What is the number you want to multiply to ${firstNumberString}?`);
    let secondNumber = Number(secondNumberString);
    let result = firstNumber * secondNumber;
    alert(`${firstNumber} * ${secondNumber} = ${result}`);
} */

function multiply (firstNumber, secondNumber){
    return firstNumber * secondNumber;
}



/*numberMultiplier();*/

/* =====================
Instructions: "Write a function that returns the value of an array at a specified index"
Example: "valueAtIndex(['Mercury', 'Venus', 'Earth', 'Mars'], 2) should return 'Earth'"
===================== */

function valueAtIndex(array, index){
    return array.at(index);
}


/* =====================
Instructions: "Write a function that returns the value of an object at a specified key"
Example: "valueAtKey({'name': 'Nathan'}, 'name') should return 'Nathan'"
===================== */

function valueAtKey(object, key){
    return object[key];
}

console.log('valueAtKey success:', valueAtKey({ 'foo': 'bar' }, 'foo') === 'bar');

/* =====================
Instructions: Write a function that returns true if a number is even.
===================== */

function isEven(number){
    if (number % 2 == 0){
        return true;
    } else{
        return false;
    }
}

console.log('isEven success:', isEven(2) === true && isEven(3) === false);

/* =====================
Instructions: Write a function that returns true if a number is odd.
===================== */

function isOdd(number){
    if (number % 2 == 1){
        return true;
    } else{
        return false;
    }
}


console.log('isOdd success:', isOdd(4) === false && isOdd(5) === true);
