/*
 * @Author: miaomiao612 dddoctorr612@gmail.com
 * @Date: 2022-10-02 00:31:31
 * @LastEditors: miaomiao612 dddoctorr612@gmail.com
 * @LastEditTime: 2022-10-15 04:28:22
 * @FilePath: \function-exercises\exercises\part2-basic-functions\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
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


let age = (birthYear) => {
    let d=new Date();
    var nowYear=d.getFullYear();
    var nowage= nowYear-birthYear;
    return nowage;
};

console.log('age success:', age(1971) === 51);

/* =====================
Instructions: Write a function that adds one to the number provided
Example: "plusOne(2) should return 3"
===================== */

let plusOne = (n) => {
    n=n+1;
    return n;
};

console.log('plusOne success:', plusOne(99) === 100);


/* =====================
Instructions: Write a function that multiplies the number provided by three
Example: "timesThree(2) should return 6"
===================== */

let timesThree = (n) => {
    n=n*3
return n;
};

console.log('timesThree success:', timesThree(33) === 99);


/* =====================
Instructions: Write a function that adds two given numbers
Example: "add(2, 3) should return 5"
===================== */

let add = (m,n) => {
    let sum=m+n;
    return sum;

};

console.log('add success:', add(4, 6) === 10);
/* =====================
Instructions: Write a function that multiplies two given numbers
Example: "multiply(2, 3) should return 6"
===================== */



let multiply = (m,n) => {
    let mul=m*n;
    return mul;
};

console.log('multiply success:', multiply(4, 6) === 24);


/* =====================
Instructions: "Write a function that returns the value of an array at a specified index"
Example: "valueAtIndex(['Mercury', 'Venus', 'Earth', 'Mars'], 2) should return 'Earth'"
===================== */

let valueAtIndex = (array,n) => {
    return array[n];
};

console.log('valueAtIndex success:', valueAtIndex([9, 8, 7, 6, 5], 2) === 7);

/* =====================
Instructions: "Write a function that returns the value of an object at a specified key"
Example: "valueAtKey({'name': 'Nathan'}, 'name') should return 'Nathan'"
===================== */

let valueAtKey = (object,string) => {
    return object[string];
};

console.log('valueAtKey success:', valueAtKey({ 'foo': 'bar' }, 'foo') === 'bar');

/* =====================
Instructions: Write a function that returns true if a number is even.
===================== */

let isEven = (n) => {
    if(n%2==0)
        return true;
        else return false;
};

console.log('isEven success:', isEven(2) === true && isEven(3) === false);

/* =====================
Instructions: Write a function that returns true if a number is odd.
===================== */

let isOdd = (n) => {
    if(n%2==1)
        return true;
        else return false;
};

console.log('isOdd success:', isOdd(4) === false && isOdd(5) === true);
