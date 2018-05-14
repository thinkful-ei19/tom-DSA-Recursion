// Fibonacci
// Write a recursive function that prints the fibonacci sequence of a given number. 
//The fibonnaci sequence a series of numbers in which each number is the sum of the two preceding numbers. //For example the 7th fibonacci number in a fibonaci sequence is 13. 
//The sequence looks as follows: 1 1 2 3 5 8 13.

'use strict';

function fibonacci(num, sequence=[]) {
  //base case
  if (num === 0) {
    return;
  }
  // recursive case
  else {
    if (sequence.length < 2) {
      sequence.push(1);
    }
    else {
      sequence.push(sequence[sequence.length-1] + sequence[sequence.length-2]);
    } 
    num--;
    fibonacci(num, sequence);
  }
  return sequence;
}



 
console.log(fibonacci(7));