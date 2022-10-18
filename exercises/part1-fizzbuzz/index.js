/*
 * @Author: miaomiao612 dddoctorr612@gmail.com
 * @Date: 2022-10-02 00:31:31
 * @LastEditors: miaomiao612 dddoctorr612@gmail.com
 * @LastEditTime: 2022-10-06 00:48:18
 * @FilePath: \function-exercises\exercises\part1-fizzbuzz\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
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
let output='';
for (let i=1;i<=100;i++)
{   if (i % 3==0 && i % 5==0)
    {output+="FizzBuzz\n"}
    else if (i % 3==0)
    {output+="Fizz\n"}
    else if (i % 5==0)
    {output+="Buzz\n"}
    else
    {output=output+i.toString()+'\n'}
}
console.log(output);



/* =====================

End code

===================== */
