const assert = require('assert');

function nthFibonacciNumber(n) {
  if (n == 0) {
    return 0;
  }

  if (n == 1) {
    return 1;
  }

  let secondLast = 0;
  let last = 1;
  let current = null;
  for (let i = 1; i < n; i++) {
    current = secondLast + last;
    secondLast = last;
    last = current;
  }

  return last;
}

assert.equal(nthFibonacciNumber(0), 0);
assert.equal(nthFibonacciNumber(1), 1);
assert.equal(nthFibonacciNumber(2), 1);
assert.equal(nthFibonacciNumber(3), 2);
assert.equal(nthFibonacciNumber(9), 34);

console.log("All assertions passed!");
