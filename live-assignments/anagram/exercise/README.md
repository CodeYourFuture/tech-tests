# Anagram

## Duration ⏰ 30 minutes max

## Description

Write a function that takes two words as arguments and returns `true` if they are anagrams (contain the exact same letters) and `false` otherwise.  This function needs to be tested and included in the web application provided as part of the exercise.

The solution should also handle edge cases such as empty strings and `undefined` arguments in a sensible way.

The solution should also be commutative, or, in other words, the result of the check must be the same regardless of which way round the words are.

## Examples

A working solution should correctly determine that:

1. "bus" is an anagram of "sub"
2. "silent" is an anagram of "listen"
3. "bleat" is an anagram of "table"
4. "table" is an anagram of "bleat"
5. "table" is _not_ an anagram of "desk"
6. "poke" is _not_ an anagram of "pork"
7. "compliant" is an anagram of "complaint"

## How to integrate the solution

The file `app/js/anagram.js` contains the declaration of the function that you will need to implement.

You should place your unit tests in a directory named `spec` and the file extension should be `.test.js` to ensure that Jest can locate and run the tests correctly.  Tests can then be run by executing `npm test`.  

Once tests are all passing, you can run `npm start` and go to http://localhost:8081/index.html to demonstrate your solution working as part of the web application.
