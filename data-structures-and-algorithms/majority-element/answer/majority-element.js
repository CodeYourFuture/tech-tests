const assert = require('assert');

function majorityElement(input) {
  const found =  {};
  input.forEach(n => {
    if (found[n]) {
      found[n]++;
    } else {
      found[n] = 1;
    }
  });

  const minSize = input.length / 2;
  for (k in found) {
    if (found[k] > minSize) {
      return k;
    }
  };

  return null;
}

assert.equal(majorityElement([3, 9, 2, 9, 2, 9, 9]), 9);
assert.equal(majorityElement([3]), 3);
assert.equal(majorityElement([3, 3, 4, 2, 4, 4, 2, 4]), null);

console.log("All assertions passed!");
