//Binary Representation
// Write a recursive function that prints out the binary representation of a given number.
//For example, the program should take 3 as an input and print 11 as output, 
//or 25 as an input and print 11001 as an output.
//Note that the binary representation of 0 should be 0.

'use strict';
function binaryRep(num) {
  // base case
  if (num === 0) {
    return '0' ;
  }
  // recursive case
  if (num >= 1) {
    return binaryRep(~~(num / 2)) + (num % 2);
  }
}
console.log(binaryRep(25)); 