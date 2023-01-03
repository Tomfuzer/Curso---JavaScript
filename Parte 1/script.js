/*
let js = 'amazing';
console.log(40 + 8 + 23 - 10);

console.log("Jonas");

console.log(23);

let firstName = "Tom";
console.log(firstName);
console.log(firstName);
console.log(firstName);


let javascriptIsFun = true;
console.log(true);

//console.log(typeof true);
console.log(typeof javascriptIsFun);
//console.log(typeof 23);
//console.log(typeof 'Jonas');

javascriptIsFun = 'YES!';
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;

console.log(typeof year);


let age = 30;
age = 31;

const birthYear = 1991;
//birthYear = 1990;

const now = 2022
const ageTom = now - 1995;
const ageRafaela = now - 1997;
console.log(ageTom, ageRafaela);
console.log(ageTom * 2, ageTom / 10, 2 ** 3);
// 2**3 é igual a 2^3 que é 2 * 2 * 2

const firstName = 'Tom';
const lastName = 'Fuzer';
console.log(firstName + ' ' + lastName);

let x = 10 + 5; //15
x += 10; // x = x + 10
x *= 4; // x = x * 4
x++;
x--;
x--;
console.log(x);

console.log(ageTom > ageRafaela); // <, >, >=, <=
console.log(ageRafaela >= 25);

const isFullAge = ageRafaela >= 25;

console.log(now - 1995 > now - 1997)

const now = 2022
const ageTom = now - 1995;
const ageRafaela = now - 1997;
console.log(now - 1995 > now - 1997)

let x, y;
x = y = 25 - 10 - 5;
console.log(x, y);
const avarageAge = (ageTom + ageRafaela) / 2;
console.log(ageTom, ageRafaela, avarageAge);

// Aula 20 conversao e coercao
//conversao
const inputYear = '1991';
console.log(Number(inputYear)); // converter string para numeros
console.log(Number(inputYear) + 18);

console.log(Number('Jonas'));
console.log(typeof NaN);

console.log(String(23));

//coercao

console.log('I am ' + 23 + ' years old');
console.log('23' - '10' - 3);
console.log('23' * '2');



// Aula 21 boolean

console.log((Boolean(0)));
console.log((Boolean(null)));
console.log((Boolean('Jonas')));
console.log((Boolean('')));

let height = 0;
if (height || height == 0) {
    console.log("Height foi definida");
} else {
    console.log("Height nao foi definida");
}

// Aula 22 operadores

const age = 18;

if (age === 18)
    console.log("Maior de idade!")
// === strict igualdade 18 === 18
// == igualdade com conversao '18' == 18 = true!

const favourite = Number(prompt("What is your favorite number?"));
console.log(favourite);
console.log(typeof (favourite));

if (favourite === 23) { // '23' == 23 '23' != === 23;
    console.log("Cool!");
} else if (favourite === 7) {
    console.log("Legal...")
}

if (favourite !== 23) {
    console.log("Why not 23? ");
}

// Aula 24 - operadores logicos

const hasDriversLicense = true;
const hasGoodVision = true;

console.log((hasDriversLicense && hasGoodVision));
console.log((hasDriversLicense || hasGoodVision));
console.log((!hasDriversLicense));

const shouldDrive = (hasDriversLicense && hasGoodVision);

if (shouldDrive) {
    console.log("Sarah is able to drive")
} else {
    console.log("Someone else should drive!")
}

const isTired = true;

console.log((hasDriversLicense || hasGoodVision || isTired));


//desafio 3

const scordeDolphins = (96 + 108 + 89) / 3;
const scordeKoalas = (88 + 91 + 110) / 3;
console.log(scordeDolphins, scordeKoalas);

if (scordeDolphins > scordeKoalas) {
    console.log("Dolphins Win");
} else if (scordeKoalas > scordeDolphins) {
    console.log("Koalas Win");
} else if (scordeDolphins === scordeKoalas) {
    console.log("DRAW!!!");
}

const scordeDolphinsBonus1 = (97 + 112 + 101) / 3;
const scordeKoalasBonus1 = (109 + 95 + 123) / 3;
console.log(scordeDolphinsBonus1, scordeKoalasBonus1);
if (scordeDolphinsBonus1 > scordeKoalasBonus1 && scordeDolphinsBonus1 > 100) {
    console.log("Dolphins Win");
} else if (scordeKoalasBonus1 >= scordeDolphinsBonus1 && scordeKoalasBonus1 >= 100) {
    console.log("Koalas Win");
} else if (scordeDolphinsBonus1 === scordeKoalasBonus1 && scordeDolphinsBonus1 >= 100 && scordeKoalasBonus1 >= 100) {
    console.log("DRAW!!!");
}

const scordeDolphinsBonus2 = (97 + 112 + 101) / 3;
const scordeKoalasBonus2 = (109 + 95 + 106) / 3;
console.log(scordeDolphinsBonus2, scordeKoalasBonus2);

if (scordeDolphinsBonus2 > scordeKoalasBonus2 && scordeDolphinsBonus2 > 100) {
    console.log("Dolphins Win");
} else if (scordeKoalasBonus2 > scordeDolphinsBonus2 && scordeKoalasBonus2 >= 100) {
    console.log("Koalas Win");
} else if (scordeDolphinsBonus2 === scordeKoalasBonus2 && scordeDolphinsBonus2 >= 100 && scordeKoalasBonus2 >= 100) {
    console.log("DRAW!!!");
} else {
    console.log("Ninguem ganhou!")
}

// Aula 28

const age = 23;

// age >= 18 ? console.log('I like to drink wine') : console.log('I like to drink water');

const drink = age >= 18 ? 'Wine' : 'Water';
console.log(drink);

let drink2;
if (age >= 18) {
    drink2 = 'Wine';
} else {
    drink2 = 'water';
};

console.log(drink2);

console.log(`I like to drink ${age >= 18 ? 'wine' : 'water'}`);


// desafio 4

*/

let tip;
let bill;

bill = 40;

console.log(`The bill was ${bill}, the tip was ${tip = bill < 50 || bill > 300 ? bill * 0.20 : bill * 0.15}, and the total value ${bill + tip} `);


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
* /

// Aula 39 - Arrays


