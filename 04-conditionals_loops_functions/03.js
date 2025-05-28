function getRandomNumber(){
    return Math.floor((Math.random() * 100) + 1);
}

/**
 * 1. Create while loop equivalents of the loops in the previous exercises!
 *
 * 2. Using the random number generator above, write a while loop that generates
 *    random numbers until it has generated one that is divisible by 11. Do you
 *    remember what operator to use?
 */


// #1-1
let i = 5;
while (i <= 1000) {
    console.log(i);
    i = i + 5;
}

// #1-2
let j = -100;
while (j <= 100) {
    console.log(j);
    j++;
}

// #1-3
let num = 0;
let x = 0;
while (x < 5000) {
    num += (x % 2 === 0) ? 3 : -1;
    console.log(num);
    x++;
}

// #2
let randomNumber = getRandomNumber();

while (true) {
    if (randomNumber % 11 !== 0) {
        console.log(`${randomNumber} is not divisible by 11. Keep going.`);
        randomNumber = getRandomNumber();
        continue;
    } else {
        console.log(`${randomNumber} is divisible by 11`);
        break;
    }
}