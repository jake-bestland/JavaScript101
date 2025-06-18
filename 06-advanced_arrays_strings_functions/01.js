/**
 * In these questions you will be practicing how to use the forEach syntax.
 *
 * 1. Use a random number generator to generate an array of 100 values.
 * 2. Use forEach on the array to output the sum, count and average.
 * 3. Use forEach to create a new array from the first one that halves all the
 *    values.
 * 4. Use forEach on the new array to output the sum, count and average again.
 * 5. Refactor: define the sum, count and average function as a separate
 *    function and pass it to the forEach functions as a name.
 */

// #1
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

// #2
let sum = 0;
let count = 0;
let avg = 0;
randomArray.forEach((number) => {
    sum = number + sum;
    count += 1;
    avg = sum / count;
});
console.log(`The sum of the randomArray is ${sum}, the count is ${count}, and the average is ${avg}`)

// #3
let halfArray = []
randomArray.forEach((number) => {
    halfArray.push(number / 2);
});
console.log(halfArray)

// #4
sum = 0;
count = 0;
avg = 0;
halfArray.forEach((number) => {
    sum = number + sum;
    count += 1;
    avg = sum / count;
});
console.log(`The sum of the halfArray is ${sum}, the count is ${count}, and the average is ${avg}`)

// #5
function sumNumber(a, b) {
    return a + b;
}

function countArray(array) {
    count = array.length;
    return count;
}

function avgNumber(sum, count) {
    avg = sum / count;
    return avg;
}
sum = 0;
count = 0;
avg = 0;
halfArray.forEach((number) => {
    sum = sumNumber(sum, number);
    count = countArray(halfArray);
    avg = avgNumber(sum, count)
});
console.log(`The sum of the halfArray is ${sum}, the count is ${count}, and the average is ${avg}`)