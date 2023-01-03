'use strict';
/*
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log('I can drive :D');

// const interface = 'Audio';
// const private = 566;

//Aula 33 - Functions

function logger() {
    console.log('My name is Tom');
}

logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
    //console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges}`;
    return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);



// Aula 34 Function != Expressions

//Function declaration
function calcAge1(birthYear) {
    //const age = 2037 - birthYear;
    //return age;
    return 2037 - birthYear;
}

const age1 = calcAge1(1991);
console.log(age1);

//Function expression
const caclAge2 = function (birthYear) {
    return 2037 - birthYear;
}

const age2 = caclAge2(1991);
console.log(age2);


// Aula 35 Function - Arrow function
//Arrow Function
const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);

const yearUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    //return retirement;
    return `${firstName} retires in ${retirement} years`;
}

console.log(yearUntilRetirement(1991, 'Jonas'));
console.log(yearUntilRetirement(1980, 'Bob'));


// Aula 36 Functions calling other functions

function cutFruitPieces(fruit) {
    return fruit * 3;
}


function fruitProcessor(apples, oranges) {
    const applesPieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    const juice = `Juice with ${applesPieces} pieces of apples and ${orangePieces} pieces of orange.`;
    return juice;
}

console.log(fruitProcessor(2, 3));


// Aula 37 - Functions

const calcAge = function (birthYear) {
    return 2037 - birthYear;
}

const yearUntilRetirement = function (birthYear, firstName) {
    const age = calcAge(birthYear);
    const retirement = 65 - age;
    if (retirement > 0) {
        console.log(`${firstName} retires in ${retirement} years`);
        return retirement;
    } else {
        console.log(`${firstName} has already retired!!!`)
        return -1;
    }

    // return `${firstName} retires in ${retirement} years`;
}

console.log(yearUntilRetirement(1991, 'Tom'));
console.log(yearUntilRetirement(1970, 'Mike'));


// Code Challenge

// const dScore1 = 44;
// const dScore2 = 23;
// const dScore3 = 71;
// const kScore1 = 65;
// const kScore2 = 54;
// const kScore3 = 49;

const dScore1 = 85;
const dScore2 = 54;
const dScore3 = 41;
const kScore1 = 23;
const kScore2 = 34;
const kScore3 = 27;

const calcAvg = (score1, score2, score3) => {
    const avg = (score1 + score2 + score3) / 3;
    return avg;
}

const dAvg = calcAvg(dScore1, dScore2, dScore3);
console.log(dAvg);
const kAvg = calcAvg(kScore1, kScore2, kScore3);
console.log(kAvg);

function checkWinner(dAvg, kAvg) {
    if (dAvg >= (kAvg * 2)) {
        console.log('Dolphins won!!!')
        return;
    } else if (kAvg >= (dAvg * 2)) {
        console.log('Koalas won!!!')
        return;
    } else {
        console.log('Nobody won!');
    }

}

checkWinner(dAvg, kAvg);
*/

// Aula 39 - Arrays


