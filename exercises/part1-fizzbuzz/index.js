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
function IfThree(n){
    if (n % 3 ==0){
        return "Fizz"
    } else {
        return n
    }
}

function IfFive(n){
    if (n % 5 ==0){
        return "Buzz"
    } else {
        return n
    }
}


let s = '';

for (i = 1; i<101; i++) {
    if (i % 3 == 0) {
        if (i % 5 == 0){
            s += "FizzBuzz" +'\n';
        } else{
            s += "Fizz" +'\n';
        }
       
    }
    else if(i % 5 ==0 ) {
        s += "Buzz" +'\n';
    }
    else {s += i.toString}
}
console.log(s);




/* =====================

End code

===================== */
