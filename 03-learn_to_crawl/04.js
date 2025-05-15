/**
 * Create three variables with numbers assigned to them.
 * Do not use zero.
 * Make the numbers at least 4 digits long, e.g. 3874, 2398.
 * Create a 4th variable with the number 7 and call it "luckyNumber".
 * 
 * After creating the variables, do the
 * following without typing any more numbers.
 * 
 * Output the following to the console:
 *      1. The sum of the numbers.
 *      2. The result of subtracting the two smallest
 *         numbers from the larger one.
 *      3. The result of multiplying all the numbers.
 *      4. The result of the largest number divided
 *         by the difference between the smaller ones.
 *      5. The result of the the numbers modulo 7.
 * 
 * Finally, label all of the outputs by using console log in the way
 * that is demonstrated below. For the labels, be sure to come up 
 * with clear and descriptive names.
 */

let result = 0
let born = 1985
let rando = 3452
let bubba = 8375
let luckyNumber = 7

let sum = born + rando + bubba + luckyNumber
console.log("The sum of all numbers:", sum)

result = bubba - born - luckyNumber
console.log("Subtracting born and luckyNumber from bubba:", result)

result = bubba * born * rando * luckyNumber
console.log("The result of multiplying all the numbers:", result)

result = bubba / (rando - luckyNumber)
console.log("The result of the largest number divided by the difference between the smaller ones:", result)

let bornModulo = born % 7
let randoModulo = rando % 7
let bubbaModulo = bubba % 7
let luckyNumberModulo = luckyNumber % 7

console.log("The result of born modulo 7:", bornModulo)
console.log("The result of rando modulo 7:", randoModulo)
console.log("The result of bubba modulo 7:", bubbaModulo)
console.log("The result of luckyNumber modulo 7:", luckyNumberModulo)