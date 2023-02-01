'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

// Aula 142
/*
let arr = ['a', 'b', 'c', 'd', 'e'];

// console.log(arr.slice(2)); //começa na posição informada
// console.log(arr.slice(2, 4)); // o último parâmetro não é acessado, 2,4 vai do 2 ao 3
// console.log(arr.slice(-2));
// console.log(arr.slice(-1));
// console.log(arr.slice(1, -2));
// console.log(arr.slice()); //copia o array

//splice
// console.log(arr.splice(2)); // modifica o array original
// arr.splice(-1); //remove o último elemento do array
// arr.splice(1, 2);
// console.log(arr);

//reverse
let arr2 = ['j', 'i', 'h', 'g', 'f'];
console.log(arr2.reverse()); // reverse modifica o array original
console.log(arr2);

//concat

const letters = arr.concat(arr2);
console.log(letters);
console.log([...arr, ...arr2]); // não modifica os arrays

//join
console.log(letters.join(' - '));
*/

// Aula 143
/*
const arr = [23, 11, 64];
console.log(arr[0]);
console.log(arr.at(0));

//Último elemento do array
console.log(arr[arr.length - 1]);
console.log(arr.slice(-1)[0]);
console.log(arr.at(-1));

console.log('tomfuzer'.at(0)); //at funciona em strings
*/

// Aula 144
/*
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// for (const movement of movements) {
// for (const [i, movement] of movements.entries()) {
//   if (movement > 0) {
//     console.log(`Movimento ${i + 1}: Você depositou ${movement}`);
//   } else {
//     console.log(`Movimento ${i + 1}: Você sacou ${Math.abs(movement)}`);
//   }
// }

// //forEach
// movements.forEach(function (movement, index, array) {
//   if (movement > 0) {
//     console.log(`Movimento ${index + 1}: Você depositou ${movement}`);
//   } else {
//     console.log(`Movimento ${index + 1}: Você sacou ${Math.abs(movement)}`);
//   }
// });
//0: function(200)
//1: function(450)
//2: function(-400)
//3: function(3000)

// let tom = [1, 2, 3, 4, 5];

// tom.forEach(function (valores, index, array) {
//   console.log(
//     `Valor nesta iteração: ${valores} -- Index nesta iteração: ${index} -- Vetor? nesta iteração: ${array}`
//   );
// });
*/

// Aula 145
