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


// Aula 39 - Arrays

const friends = ['Tom', 'Bruno', 'Rafaela'];
console.log(friends);

//const years = new Array(1991, 1994, 2008, 2020);

console.log(friends[0]);
console.log(friends[2]);
console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = 'Matheus'
console.log(friends);

//friends[3] = 'Erro?';


const tom = ['Tom', 'Fuzer', 2023 - 1995, 'Desempregado', friends]
console.log(tom);

const calcAge = function (birthYear) {
    return 2037 - birthYear;
}

const years = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);

console.log(age1, age2, age3);

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];

console.log(ages);

// Aula 40 - Array methods

//add elements
const friends = ['Tom', 'Bruno', 'Rafaela'];
console.log(friends);

const newLength = friends.push('Jay'); // push adiciona no final
console.log(friends);
console.log(newLength);

friends.unshift('Matheus'); // unshift adiciona no inicio
console.log(friends);

//remove elements
const popped = friends.pop(); //exclui do final
console.log(popped);
const shifted = friends.shift(); //exclui do inicio
console.log(shifted);
console.log(friends);

console.log(friends.indexOf('Tom'));

console.log(friends.includes('Tom')); //include retorna true or false

//include para condicoes

if (friends.includes('Tom')) {
    console.log('Você tem um amigo chamado Tom!');
}



// Challenge

let tip;
let bill;

bill = 40;

// console.log(`The bill was ${bill}, the tip was ${tip = bill < 50 || bill > 300 ? bill * 0.20 : bill * 0.15}, and the total value ${bill + tip} `);


function tipsCalc(bill) {
    if (bill < 50 || bill > 300) {
        bill = bill * 0.20;
        return bill;
    } else {
        bill = bill * 0.15;
        return bill;
    }
}

// console.log(tipsCalc(40));

// const calcTips = bill => tip = bill < 50 || bill > 300 ? bill * 0.20 : bill * 0.15;

console.log(tipsCalc(100));

const bills = [125, 555, 44];
//console.log(bills);
const tips = [tipsCalc(bills[0]), tipsCalc(bills[1]), tipsCalc(bills[2])];
console.log(tips);
const totals = [tips[0] + bills[0], tips[1] + bills[1], tips[2] + bills[2]]
console.log(totals);



// Aula 42 - Objects

const tom = {
    firstName: 'Tom',
    lastName: 'Fuzer',
    age: 2022 - 1995,
    job: 'None',
    friends: ['Rafaela', 'Bruno', 'Luiz']
};



// Aula 43 - Acess Objects dot . Bracket []

const tom = {
    firstName: 'Tom',
    lastName: 'Fuzer',
    age: 2022 - 1995,
    job: 'World of Warcrafter',
    friends: ['Rafaela', 'Bruno', 'Luiz']
};

console.log(tom);

console.log(tom.lastName);
console.log(tom['lastName']);

const nameKey = 'Name';
console.log(tom['first' + nameKey]);
console.log(tom['last' + nameKey]);

// const interestedIn = prompt('What do you want to know about tom? Choose between firstName, lastName, age, job and friends');

// if (tom[interestedIn]) {
//     console.log(tom[interestedIn]);
// } else {
//     console.log('Wrong request! Choose between firstName, lastName, age, job and friends')
// }

tom.location = 'Rio';
tom['twitter'] = '@tomfuzer_'
console.log(tom)

console.log(`${tom.firstName} has ${tom.friends.length}, and his best friend is ${tom.friends[0]}`);



// 44 - Objects Methods

const tom = {
    firstName: 'Tom',
    lastName: 'Fuzer',
    birthYear: 1995,
    job: 'World of Warcrafter',
    friends: ['Rafaela', 'Bruno', 'Luiz'],
    hasDriversLicense: true,
    // calcAge: function (birthYear) {
    //     return 2022 - birthYear;
    // }
    // calcAge: function () {
    //     return 2022 - this.birthYear;
    // }
    calcAge: function () {
        this.age = 2022 - this.birthYear;
        return this.age;
    },

    getSummary: function () {
        return `${this.firstName} is a ${this.age}-year old ${this.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license`;
    }

}

console.log(tom.calcAge(1995));
// console.log(tom['calcAge'](1995)); // realizando acesso ao objeto por 'string' = atributo
// console.log(tom.calcAge(tom.birthYear));
// console.log(tom.calcAge()); // chamando func sem parâmetro
console.log(tom.age);

// console.log(`${tom.firstName} is a ${tom.age}-year old ${tom.job}, and he has ${tom.hasDriversLicense ? 'a' : 'no'} driver's license`);
console.log(tom.getSummary());



// Challenge

const mark = {
    fullName: 'Mark Miller',
    weights: 78,
    tall: 1.69,
    calcBmi: function () {
        this.bmi = this.weights / this.tall ** 2;
        return this.bmi;
    }

}

const john = {
    fullName: 'John Smith',
    weights: 92,
    tall: 1.95,
    calcBmi: function () {
        this.bmi = this.weights / this.tall ** 2;
        return this.bmi;
    }

}

if (mark.calcBmi() > john.calcBmi()) {
    console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s BMI (${john.bmi})`)
} else if (john.calcBmi() > mark.calcBmi()) {
    console.log(`${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s BMI (${mark.bmi})`)
}
*/
