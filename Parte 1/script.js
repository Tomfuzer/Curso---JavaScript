/*
// Aula 11 - Assignments

let country = "Brazil";
let continent = "America do Sul";
let population = 230000000;
console.log(country);
console.log(continent);
console.log(population); 

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

//Challenge 1

// const markWeights = 78;
// const markHeight = 1.69;
// const johnWeights = 92;
// const johnHeight = 1.95;

const markWeights = 95;
const markHeight = 1.88;
const johnWeights = 85;
const johnHeight = 1.76;

//BMI = mass / height**2 = mass / (height * height)

let markBmi = markWeights / (markHeight * markHeight);
console.log(markBmi);
let johnBmi = johnWeights / (johnHeight * johnHeight);
console.log(johnBmi);

markBmi = markWeights / markHeight ** 2;
console.log(markBmi);
johnBmi = johnWeights / johnHeight ** 2;
console.log(johnBmi);

let markHigherBMI;

markHigherBMI = (markBmi > johnBmi);
console.log(markHigherBMI);
//Aula 17 - Strings

const firstName = "Jonas";
const job = 'Teacher';
const birthYear = 1991;
const year = 2037;

const jonas = "I'm " + firstName + ', a ' + (year - birthYear) + ' year old ' + job + '!';
console.log(jonas);

const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log(jonasNew);

console.log(`Just a regular string...`);

console.log('String with \n\
multiple \n\
lines');

console.log(`String
multiple
lines`);

//Aula 18 - If else 

const age = 15;

if (age >= 18) {
    console.log('Sarah can start driving license🚗');
} else {
    const yearLeft = 18 - age;
    console.log(`Sarah is too young. Wait another ${yearLeft} years :)`);
}
const birthYear = 2002;
let century;

if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}

console.log(century);

//Challenge 2

// const markWeights = 78;
// const markHeight = 1.69;
// const johnWeights = 92;
// const johnHeight = 1.95;

const markWeights = 95;
const markHeight = 1.88;
const johnWeights = 85;
const johnHeight = 1.76;

//BMI = mass / height**2 = mass / (height * height)

let markBmi = markWeights / (markHeight * markHeight);
let johnBmi = johnWeights / (johnHeight * johnHeight);

markBmi = markWeights / markHeight ** 2;
console.log(markBmi);
johnBmi = johnWeights / johnHeight ** 2;
console.log(johnBmi);

let markHigherBMI;

if (markHigherBMI = (markBmi > johnBmi)) {
    console.log(`Mark's BMI eh maior (${johnBmi}) `);
} else {
    console.log(`John's BMI eh maior (${johnBmi}) `);
}

/*if (markHigherBMI = (markBmi < johnBmi)) {
    console.log(markBmi);
} else {
    console.log(johnBmi);
}

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



let tip;
let bill;

bill = 40;

console.log(`The bill was ${bill}, the tip was ${tip = bill < 50 || bill > 300 ? bill * 0.20 : bill * 0.15}, and the total value ${bill + tip} `);

*/
