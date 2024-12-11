# Century Finder

## Duration ⏰ 30 minutes max

## Description

Write a function that takes a historical date as input and returns the century in which that date falls.  You can assume that all inputs will be Gregorian Calendar dates in the Anno Domini era, or, in other words, normal western calendar dates where the year is a positive number.

The function needs to be tested using unit tests and included in the web application provided as part of the exercise.

## Examples

A working solution should correctly determine that:

1. 4th July 1776 was in the 18th century.
2. 15th June 1215 was in the 13th century.
3. 8th May 1945 was in the 20th century.
4. 31st December 2000 was in the 20th century (yes, [twentieth](https://www.google.co.uk/search?q=When+did+the+21st+century+begin%3F)).
5. 1st January 2001 was in the 21st century.
6. 1st August 799 was in the 8th century.

## How to integrate the solution

The file `app/js/century.js` contains the declaration of the function that you will need to implement, along with a helper function you should use for formatting the ordinal century number as a word.

You should place your unit tests in a directory named `spec` and the file extension should be `.test.js` to ensure that Jest can locate and run the tests correctly.  Tests can then be run by executing `npm test`.  

Once tests are all passing, you can run `npm start` and go to http://localhost:8081/index.html to demonstrate your solution working as part of the web application.
