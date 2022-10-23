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

// step 1
function counting(start,end){
    return Array(end - start + 1).fill().map((_, idx) => start + idx)
}
oneHun = counting(1,100)

 console.log(oneHun)

//step 2

function FizzBuzz(array){
    array2 = []
    for (let i = 0; i < array.length; i++) {
        mod3 = array[i]%3;
        mod5 = array[i]%5;
        if (mod3 == 0){
            array2[i] = "fizz"
        } else if (mod5 == 0){
            array2[i] = "buzz"
        } else {
            array2[i] = array[i]
        }
      } 
    return array2
}

fizzbuzz = FizzBuzz(oneHun)
console.log(fizzbuzz)

//step3
function step3(array){
    array2 = []
     for (let i = 0; i < array.length; i++) {
        mod3 = array[i]%3;
        mod5 = array[i]%5;
        if (mod3 == 0 && mod5 == 0){
            array2[i] = "fizzbuzz"
        } else if (mod3 == 0 && mod5 != 0){
            array2[i] = "fizz"
        } else if (mod5 == 0 && mod3 != 0){
            array2[i] = "buzz"
        } else {
            array2[i] = array[i]
        }
      } 
    return array2
}

fizzybuzzy = step3(oneHun)
console.log(fizzybuzzy)

/* =====================

End code

===================== */
