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

//Projeto Banco

const displayMoviments = function (mov) {
  containerMovements.innerHTML = '';

  mov.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const html = `<div class="movements__row">
    <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
        <div class="movements__value">${mov}</div>
  </div>;`;

    containerMovements.insertAdjacentHTML('afterbegin', html); // parametros de insertAdjacentHTML('aonde colocar', 'o que colocar')
  });
};
displayMoviments(account1.movements); // chamou a função displayMoviments que fez a inserção no HTML com as informações específicas da account1

// Aula 151
// users

const creatUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner //criou um atributo que não existia
      .toLowerCase()
      .split(' ')
      .map(name => name[0]) //arrow func
      .join('');
  });
};
creatUsernames(accounts);
console.log(account1);

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

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
/*
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

currencies.forEach(function (valor, key, map) {
  console.log(`${key}: ${valor}`);
});

const currenciesUnique = new Set(['USD', 'GBP', 'BRL', 'BRL', 'EUR', 'EUR']);
console.log(currenciesUnique);
currenciesUnique.forEach(function (valor, _, map) {
  console.log(`${valor}: ${valor}`);
});
*/

// Aula 148 Challenge #1
/* 
Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners about their dog's age, and stored the data into an array (one array for each). For now, they are just interested in knowing whether a dog is an adult or a puppy. A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years old.

Create a function 'checkDogs', which accepts 2 arrays of dog's ages ('dogsJulia' and 'dogsKate'), and does the following things:

1. Julia found out that the owners of the FIRST and the LAST TWO dogs actually have cats, not dogs! So create a shallow copy of Julia's array, and remove the cat ages from that copied array (because it's a bad practice to mutate function parameters)
2. Create an array with both Julia's (corrected) and Kate's data
3. For each remaining dog, log to the console whether it's an adult ("Dog number 1 is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy 🐶")
4. Run the function for both test datasets

HINT: Use tools from all lectures in this section so far 😉

TEST DATA 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
TEST DATA 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]

GOOD LUCK 😀


const julia = [3, 5, 2, 12, 7];
const juliab = [9, 16, 6, 8, 3];
//3, 5, 2, 12, 7, 9, 16, 6, 8, 3
const kate = [4, 1, 15, 8, 3];
const kateb = [10, 5, 6, 1, 4];

const juliaC = [...julia, ...juliab];
// console.log(juliaC.length);
// console.log(juliaC.splice(1, juliaC.length - 3));
// console.log(julia.splice(1, julia.length - 3));

const checkDog = function (arr, arr2) {
  const arrC = arr.slice(1, arr.length - 2);
  const arrAll = [...arrC, ...arr2];
  console.log(arrAll);

  arrAll.forEach(function (dogs, i, _) {
    if (dogs < 3) {
      console.log(`Dog number ${i + 1} is still a puppy 🐶"`);
    } else {
      console.log(`Dog number ${i + 1} is an adult, and is ${dogs} years old`);
    }
  });
};

// checkDog(julia, kate);
checkDog(juliab, kateb);
*/

// Aula 149

// Aula 150
/*
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const eurToUsd = 1.1;

//Retorna um novo array e não modifica o parâmetro
const movementsUSD = movements.map(function (mov) {
  return mov * eurToUsd;
});

const movementsUSDfor = [];
for (const mov of movements) movementsUSDfor.push(mov * eurToUsd);
// console.log(movements);
// console.log(movementsUSD);
console.log(movementsUSDfor);

const movementsUSDarrow = movements.map(mov => mov * eurToUsd);

console.log(movementsUSDarrow);

const movDescription = movements.map(
  (mov, i) =>
    `Movimento ${i + 1}: Você ${mov > 0 ? 'depositou' : 'sacou'} ${Math.abs(
      mov
    )}`
);

// if (mov > 0) {
//   return `Movimento ${i + 1}: Você depositou ${mov}`;
// } else {
//   return `Movimento ${i + 1}: Você sacou ${Math.abs(mov)}`;
// }

console.log(movDescription);
*/

// Aula 152
