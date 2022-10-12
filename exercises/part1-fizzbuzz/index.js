/* =====================

# Exercise: FizzBuzz

## Introduction

Step 1: Write a program that uses console.log to print each of the numbers from 1 to 100.

Step 2: Update the program so that, for multiples of three, it prints "Fizz" instead
of the number and, for multiples of five, it prints "Buzz" instead of the number.

Step 3: For numbers which are multiples of *both* three and five, make the program
print "FizzBuzz" instead of "Fizz" or "Buzz".

Hint 1. Remember that you can use conditionals to /conditionally/ change a program's behavior
Hint 2. Consider how modulo (calculating the remainder of a division problem) might be useful

Believe it or not, this is a common programming challenge in job interviews!

===================== */

/* =====================

Start code

===================== */

// question 1
let i = 1;
while(i <=100 ){
    console.log(i);
    i++;
}


//question 2

let j = 1;
while(j <= 100 ){
    if (j/5 % 1 === 0 && j/3 % 1 === 0) {
        console.log(j);
    } else if (j/5 % 1 === 0) {
        console.log("Buzz");
    } else if (j/3 % 1 === 0) {
        console.log("Fizz");
    } else {
        console.log(k);
    }
    j++;
}



// question 3
let k = 1;
while(k <=100 ){
    if (k/5 % 1 === 0 && k/3 % 1 === 0) {
        console.log("FizzBuzz");
    } else {
        console.log(k);
    }
    k++;
}


/* =====================

End code

===================== */
