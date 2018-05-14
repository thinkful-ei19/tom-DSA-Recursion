// nth Triangular Number
// Calculates the nth triangular number. A triangular number counts the objects that can form an 
// equilateral triangle. The nth triangular number is the number of dots composing a triangle with n dots 
// on a side, and is equal to the sum of the n natural numbers from 1 to n. This is the Triangular Number 
// Sequence: 1, 3, 6, 10, 15, 21, 28, 36, 45

'use strict';

function nthTriangularNumber(arr) {
  // base case
  if (arr.length === 0) {
    return arr;
  }
  const triangle = ((arr[0])*(arr[0] + 1)) / (2);
  return [triangle, ...nthTriangularNumber(arr.slice(1))];
}
const sequence = [1, 3, 6, 10, 15, 21, 28, 36, 45];


console.log(nthTriangularNumber(sequence)); 