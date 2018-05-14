// Array Double
// Write a function that takes an array as input which contains an unknown set of numbers, and outputs an array with each input value doubled. Test your solution by trying a handful of different arrays. For example,

// Input: [1, 2, 3]
// Output: [2, 4, 6]

'use strict';
function arrayDouble(arr) {
  //base case
  if (arr.length === 0) {
    return arr;
  }
  // recursive case
  const doubled = arr[0] * 2;
  return [doubled, ...arrayDouble(arr.slice(1))];
}

const arr = [1, 2, 3];

console.log(arrayDouble(arr));