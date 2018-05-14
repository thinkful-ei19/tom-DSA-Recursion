// Factorial
// Write a recursive function that finds the factorial of a given number. The factorial of a number can be 
//found by multiplying that number by each number between itself and one. The factorial of 5 is equal to 5 
//* 4 * 3 * 2 * 1 = 120

'use strict';
function factorial(num) {
  //base case 
  if (num === 0) {
    return 1;
  }
  // recursive case 
  else {
    return (num * factorial(num - 1));
  }
}

console.log(factorial(4));