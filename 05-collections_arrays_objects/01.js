/**
 * 1. Create an array of strings with the names of some items in the room you
 *    are sitting in right now. For example "chair", "keyboard" etc
 * 2. Now think of 3 drawers or shelves or boxes that you have nearby. Make an
 *    array with a sub-array for each drawer or box, and add 5 things in each
 *    sub-array. Do this for 3 boxes. You should have a two dimensional array.
 * 3. Pick 5 things from the two dimensional array just created, and log them to
 *    the console using array referencing.
 * 4. Use a for loop to create a array of the numbers from 1 to 100.
 * 5. Use another for loop to go through the array of numbers just created and
 *    log the sum of all the numbers.
 * 6. Use the random number generator from previous labs and another for loop to
 *    create a array of 100 random numbers.
 * 7. Use another for loop to go over each of these random numbers and put them
 *    in one of two arrays. One for odd numbers, and one for even numbers.
 * 8. Make the for loop that logs the sum of all the numbers in an array into a
 *    function that takes an array as an argument and returns the sum. Use this
 *    function to log the sum of the two arrays of odd and even numbers.
 */

// #1
let roomObjects = ["chair", "mouse", "desk", "monitor", "laptop"];

// #2
let drawer1 = ["pencil", "pen", "marker", "higlighter", "eraser"];
let drawer2 = ["notepad", "tapemeasure", "batteries", "mints", "gum"];
let drawer3 = ["paperclip", "staples", "rubberband", "tape", "tacs"];
let cabinet = [drawer1, drawer2, drawer3];

// #3
console.log(cabinet[0][0], cabinet[0][3], cabinet[1][1], cabinet[1][4], cabinet[2][0], cabinet[2][2]);

// #4
let numberArray = [];
for (let i = 1; i <= 100; i++) {numberArray.push(i)}
console.log(numberArray)

// #5
let sum = 0;
let x = 0;
for (numberArray[x]; x < numberArray.length; x++) {
    sum += numberArray[x];
}
console.log(sum)

//#6
function getRandomNumber(){
    return Math.floor((Math.random() * 100) + 1);
}

let randomArray = [];
let randomNumber = getRandomNumber();
for (let i = 1; i <= 100; i++) {
    randomArray.push(randomNumber);
    randomNumber = getRandomNumber();
}
console.log(randomArray)

// #7
let oddArray = [];
let evenArray = [];
let n = 0;
for (randomArray[n]; n < randomArray.length; n++) {
    randomArray[n] % 2 === 0 ? evenArray.push(randomArray[n]) : oddArray.push(randomArray[n]);
}
console.log(oddArray)
console.log(evenArray)

// #8
function arraySum(array) {
    let sum = 0;
    let x =0;
    for (array[x]; x < array.length; x++) {
        sum += array[x];
    }
    return sum;
}

console.log("odd array sum:")
console.log(arraySum(oddArray));
console.log("even array sum:")
console.log(arraySum(evenArray));