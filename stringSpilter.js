// String Splitter
// Split a string based upon a separator (similar to String.prototype.split).

'use strict';

function stringSpilter(str, sep) {
  //base case 
  if (str[0] === sep) {
    return str;
  } 
  // recursive case 
  let spilter = str.indexOf(sep);
  return [str.slice(0, spilter), stringSpilter(str.slice(spilter), sep)];
}
 
console.log(stringSpilter('thomas', 'm'));