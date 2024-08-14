const assert = require('assert');

function largestNumberInArray(input) {
  let largest = 0;
  input.forEach(n => {
    if (n > largest) {
      largest = n;
    }
  });

  return largest;
}

assert.equal(largestNumberInArray([10, 20, 4]), 20);
assert.equal(largestNumberInArray([20, 10, 20, 4, 100]), 100);
assert.equal(largestNumberInArray([1, 1, 1]), 1);

console.log("All assertions passed!");
