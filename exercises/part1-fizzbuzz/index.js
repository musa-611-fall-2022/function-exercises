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


let num1 = 1;
while (num1 <= 100) {
  if(num1 % 3 == 0 || num1 % 5 == 0){
    if(num1 % 3 == 0 && num1 % 5 == 0){
        console.log("FizzBuzz");
    }
    else if(num1 % 3 == 0){
        console.log("Fizz");
    }
    else{
    console.log("Buzz");
    }
  }
  else{
    console.log(num1);
  }
  num1 = num1 + 1;
}



/* =====================

End code

===================== */
