// Reverse String
// Write a function that reverses a string. 
// Take a string as input, reverse the string, and return the new string.

'use strict';
function reverseString(str) {
  //base case
  if (str.length === 0 ) {
    return '';
  }
  // recursive case
  return str[str.length - 1] + reverseString(str.slice(0, -1));
}

console.log(reverseString('Tom'));