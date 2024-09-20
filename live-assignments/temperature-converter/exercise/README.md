# Temperature Converter

## Duration ⏰ 35 minutes max

## Description

Write a function that takes a source temperature unit, a destination temperature unit and a numerical value, and outputs the result of converting the temperature value in the source temperature unit into the destination temperature unit.

The temperatures to be supported are:

* Degrees Celsius (°C)
* Degrees Farenheit (°F)
* Kelvins (K)

You can use whichever conversion method you want, but, if you need a guide for this exercise, you can assume the following requirements:

* °F = °C * 9 / 5 + 32
* K = °C + 273

Your solution should be able to convert temperatures one way and then back again. Negative temperatures also need to be supported, the exception being with Kelvins, where 0K is Absolute Zero and therefore any negative value for Kelvins should be considered an input error. The solution should also handle `null` or `undefined` values in a sensible way.

## Examples

A working solution should correctly determine that:

1. 100°C is equivalent to 212°F
2. 212°F is equivalent to 100°C
3. 32°F is equivalent to 0°C
4. 25°C is equivalent to 298K 
5. 50°F is equivalent to 283K
6. 256K is quivalent to -17°C

## How to integrate the solution

The file `app/js/tempconv.js` contains the declaration of the function that you will need to implement.

You should place your unit tests in a directory named `spec` and the file extension should be `.test.js` to ensure that Jest can locate and run the tests correctly. Tests can then be run by executing `npm test`.

Once tests are all passing, you can run `npm start` and go to http://localhost:8081/index.html to demonstrate your solution working as part of the web application.
