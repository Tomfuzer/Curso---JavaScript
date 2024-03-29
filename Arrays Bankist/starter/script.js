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

//Movimentações - calcular e exibir
const displayMovements = function (movements, sort = false) {
  containerMovements.innerHTML = '';
  //habilitando a função de sort implementando na função displayMovements
  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const html = `<div class="movements__row">
    <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
        <div class="movements__value">${mov}R$</div>
  </div>;`;

    containerMovements.insertAdjacentHTML('afterbegin', html); // parametros de insertAdjacentHTML('aonde colocar', 'o que colocar')
  });
};
//displayMovements(account1.movements); // chamou a função displayMovements que fez a inserção no HTML com as informações específicas da account1

//Balanço - calcular e exibir
const calcDisplayBalance = function (account) {
  account.balance = account.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${account.balance} BRL`; // inserir a informação no html/webpage
};

//calcDisplayBalance(account1.movements); // Chamando a função displayBalance

//Função pra inserir os valores do summary, in, out e interest -- Sempre verificar a qual objeto do HTML a função está referenciando, dessa forma é mais fácil compreender o que ela deve mostrar/fazer.
const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes}R$`;

  const outcomes = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(outcomes)}R$`;

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposite => (deposite * acc.interestRate) / 100)
    .filter((int, i, array) => {
      // console.log(array);
      return int >= 1;
    })
    .reduce((acc, mov) => acc + mov, 0);
  labelSumInterest.textContent = `${interest}R$`;
};
//calcDisplaySummary(account1.movements);

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

// Update Ui
const updateUi = function (acc) {
  displayMovements(acc.movements);
  //Display balance
  calcDisplayBalance(acc);
  //Display summary
  calcDisplaySummary(acc);
};

// Login -- Events handler
let currentAccount;

btnLogin.addEventListener('click', function (event) {
  //Prevent form from submitting -- impede a pagina de recarregar
  event.preventDefault();

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);

  //optional chaining
  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    console.log('login');
    //Display UI and msg
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;
    //Clear input fields
    inputLoginPin.value = inputLoginUsername.value = '';
    inputLoginPin.blur();
    //Display movements
    updateUi(currentAccount);
  }
});

// Transfer

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const reciverAccount = accounts.find(
    acc => acc.username === inputTransferTo.value
  );

  inputTransferAmount.value = inputTransferTo.value = '';

  if (
    amount > 0 &&
    reciverAccount &&
    currentAccount.balance >= amount &&
    reciverAccount?.username !== currentAccount.username
  ) {
    // console.log('Transferência válida');
    //Executando a operação
    currentAccount.movements.push(-amount);
    reciverAccount.movements.push(amount);

    updateUi(currentAccount);
  }
});

// Close account
btnClose.addEventListener('click', function (e) {
  e.preventDefault();
  // console.log('delete!');
  if (
    inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    // console.log(index);
    accounts.splice(index, 1);

    //Hide UI
    containerApp.style.opacity = 0;
  } else {
    console.log('Credênciais inválidas');
  }
  inputCloseUsername.value = inputClosePin.value = '';
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputLoanAmount.value);

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    // Add movement / add money requested
    currentAccount.movements.push(amount);
    // Update UI
    updateUi(currentAccount);

    inputLoanAmount.value = '';
    alert('Valor crédito automaticamente na sua conta.');
  } else {
    alert(
      'O valor solicitado é maior do que sua faixa de crédito, tente valores menores.'
    );
  }
});

let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});

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
/*
const deposits = account1.movements.filter(function (mov) {
  return mov > 0;
}); // usando a função filter pra retornar apenas os valores > 0 -- Lembrando que a func filter recebe um vetor como parâmetro e já cria um novo vetor de acordo com as regras estabelecidas

console.log(account1.movements);
console.log(deposits);

const depositsFor = [];
for (const mov of account1.movements) if (mov > 0) depositsFor.push(mov);

console.log(depositsFor);

const withdrawals = account1.movements.filter(mov => mov < 0); // usando a função filter pra retornar apenas os valores < 0 com arrow function
console.log(withdrawals);
*/

// Aula 153
/*
console.log(account1.movements);

//reduce acc = acumulator = snowball
// const balance = account1.movements.reduce(function (acc, cur, i, arr) {
//   console.log(`Iteração n°: ${i}: ${acc}`);
//   return acc + cur;
// }, 0);
// console.log(balance);
const balance = account1.movements.reduce((acc, cur) => acc + cur, 0);
console.log(balance);

let balance2 = 0;
for (const mov of account1.movements) balance2 += mov;
console.log(balance2);
//
//Maximum value
const max = account1.movements.reduce(function (acc, cur) {
  if (cur > acc) {
    acc = cur;
  } else {
    return acc;
  }
  return acc;
}, account1.movements[0]);

console.log(max);
*/

// Aula 154 - Code Challenge #2

/*
const data1 = [5, 2, 4, 1, 15, 8, 3];
const data2 = [1, 6, 10, 5, 6, 1, 4];

function calcHumanAge(ages) {
  const humanAge = ages.map(age => (age <= 2 ? 2 * age : 16 + age * 4));
  const adults = humanAge.filter(age => age >= 18);
  console.log(humanAge);
  console.log(adults);

  // const avg = adults.reduce((acc, age) => acc + age, 0) / adults.length;
  const avg = adults.reduce((acc, age, i, arr) => acc + age / arr.length, 0);

  return avg;
}

function avgAge(arr) {
  const avg =
    arr.reduce(function (acc, cur) {
      return acc + cur;
    }, 0) / arr.length;
  return avg;
}

console.log(avgAge([36, 32, 76, 48, 28]));

// const abc = calcHumanAge(data1);
// console.log(abc);
*/

// Aula 155 -
/*
//Pipeline de métodos
const brlToUsd = 1 / 5.13;
const depositeUSD = account1.movements
  .filter(mov => mov > 0)
  .map((mov, i, array) => {
    // console.log(array);
    return mov * brlToUsd;
  })
  // .map(mov) => mov * brlToUsd)
  .reduce((acc, mov) => acc + mov);
console.log(depositeUSD);
*/

// Aula 156 - Challenge #3
/*
const data1 = [5, 2, 4, 1, 15, 8, 3];
const data2 = [16, 6, 10, 5, 6, 1, 4];

function calcHumanAge(ages) {
  const humanAge = ages
    .map(age => (age <= 2 ? 2 * age : 16 + age * 4))
    .filter(function (age, i, arr) {
      console.log(arr);
      return age >= 18;
    })
    .reduce(function (acc, age, i, arr) {
      const avg = acc + age / arr.length;
      return avg;
    }, 0);

  return humanAge;
}

console.log(calcHumanAge(data1));
console.log(calcHumanAge(data2));
*/

// Aula 157 -
/*
//Lembrando: Arrays methods aceitam callback functions e loop over the array. Até o momento a maioria que vimos retornam outro array, entretanto alguns retornam outras coisas como valores único, por exemplo o .reduce
//Find retorna apenas o primeiro valor para qual a condição é verdadeira =! filter retorna todos para qual a condição é atendida -- filter retorna array, find retorna um valor
const firstWithdrawal = account1.movements.find(mov => mov < 0);
console.log(account1.movements);
console.log(firstWithdrawal);

console.log(accounts);
const account = accounts.find(acc => acc.owner === 'Jessica Davis');
console.log(account);
*/

// Aula 158 --

// Aula 161

/*
// EQUALITY
console.log(account1.movements);
console.log(account1.movements.includes(-130));

// CONDITION
const anyDeposite = account1.movements.some(mov => mov > 1500);
console.log(anyDeposite);

// EVERY
console.log(account4.movements.every(mov => mov > 0));

// Callback separado
const deposit = mov => mov > 0;
console.log(account2.movements.some(deposit));
console.log(account2.movements.every(deposit));
console.log(account2.movements.includes(deposit));
*/

// Aula 162
/*
const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
console.log(arr.flat());

//flat() transforma um array de sub arrys em um array simples ou seja, sem subníveis de arrays, o parâmetro flat('para...') define o nível em que queremos descer na transformação
const arrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8];
console.log(arrDeep.flat(2));

// const accountsMovements = accounts.map(acc => acc.movements);
// console.log(accountsMovements);
// const allMovements = accountsMovements.flat();
// console.log(allMovements);
// const overalBalance = allMovements.reduce((acc, mov) => acc + mov, 0);
// console.log(overalBalance);

//flat
const overalBalance = accounts
  .map(acc => acc.movements)
  .flat()
  .reduce((acc, mov) => acc + mov, 0);

console.log(overalBalance);
//flatmap
const overalBalance2 = accounts
  .flatMap(acc => acc.movements) //apenas um nível de profundidade
  .reduce((acc, mov) => acc + mov, 0);

console.log(overalBalance2);
*/

// Aula 163

/*
//strings
const owners = ['Tom', 'Rafaela', 'Arthur', 'Bruno'];
console.log(owners.sort()); // transforma o vetor

console.log(account1.movements);
//return < 0 A,B (keep order)
//return > 0 B,A (switch order)
//ascendente
// account1.movements.sort((a, b) => {
//   if (a > b) return 1;
//   if (b > a) return -1;
// });
account1.movements.sort((a, b) => a - b);
console.log(account1.movements);

//descendente
// account1.movements.sort((a, b) => {
//   if (a > b) return -1;
//   if (b > a) return 1;
// });
account1.movements.sort((a, b) => b - a);
console.log(account1.movements);3
*/

// Aula 164

/*
const arr = [1, 2, 3, 4, 5, 6, 7];
const x = new Array(7);
console.log(x);
// console.log(x.map(() => 5));

// x.fill(1); //modifica o array original
// console.log(x);
// x.fill(1, 3); // fill('valor', 'indice inicial do preenchimento')
x.fill(1, 3, 5);
console.log(x);
arr.fill(23, 2, 6);
console.log(arr);

//Array.from
const y = Array.from({ length: 7 }, () => 1);
console.log(y);
const z = Array.from({ length: 7 }, (_, i) => i + 1);
console.log(z);
let valor;
const dice = Array.from(
  { length: 100 },
  () => Math.trunc(Math.random() * 6) + 1
);
// const dice = Array.from({ length: 100 }, function () {
//   valor = Math.trunc(Math.random() * 6) + 1;
//   return valor;
// });

// console.log(dice);

labelBalance.addEventListener('click', function () {
  const movementsUI = Array.from(
    document.querySelectorAll('.movements__value'),
    el => Number(el.textContent.replace('R$', ''))
  );
  console.log(movementsUI);

  const movementsUI2 = [...document.querySelectorAll('.movements__value')];
  console.log(movementsUI2);
});
*/

// Aula 165

/*
// const arr = [];
// //Modificam o array original{
// //adicionam ao original
// arr.push(); // final
// arr.unshift(); // inicio
// //removem do original
// arr.pop(); //final
// arr.shift(); //começo
// arr.splice(); //any
// //outros
// arr.reverse();
// arr.sort();
// arr.fill();
// //}

// //Novo array{
// //Computado pelo array original
// arr.map(); // loop
// //Usando condições
// arr.filter();
// //Parte do original
// arr.slice();
// //Adiciona o original a outro
// arr.concat();
// //Flat o original
// arr.flat();
// arr.flatMap();
// //}

// //Array index
// //Valor base do índice
// arr.indexOf();
// //Possui teste de condição
// arr.findIndex();
// //Elementos do array
// //Possui teste de condição
// arr.find();

// //Descobrir se está contido no array
// //Pelo valor
// arr.includes();
// //Teste de condição, true se algum elemento satisfazer
// arr.some();
// //Teste de condição, true se todos os elementos satisfazem a condição
// arr.every();

// //Nova String
// arr.join();
// //Transformar em um valor
// arr.reduce();

// //Loop over the array
// arr.forEach();
*/

// Aula 166

/*

const bankDepositeSum = accounts
  .flatMap(acc => acc.movements)
  .filter(mov => mov > 0)
  .reduce((sum, cur) => sum + cur, 0);

console.log(bankDepositeSum);

const numDeposite1k = accounts
  .flatMap(acc => acc.movements)
  .filter(mov => mov >= 1000)
  .reduce(function (prev, cur, i) {
    let cont = i + 1;
    return cont;
  });
console.log(numDeposite1k);

const { deposits, withdrawls } = accounts
  .flatMap(acc => acc.movements)
  .reduce(
    (sums, cur) => {
      // cur > 0 ? (sums.deposists += cur) : (sums.withdrawls += cur);
      sums[cur > 0 ? 'deposits' : 'withdrawls'] += cur;
      return sums;
    },
    { deposits: 0, withdrawls: 0 }
  );

console.log(deposits, withdrawls);

//this is a nice title -> This Is a Nice Tittle

const convertTitleCase = function (title) {
  const capitalize = str => str[0].toUpperCase() + str.slice(1);

  const exceptions = ['a', 'an', 'the', 'but', 'or', 'on', 'in', 'with'];

  const titleCase = title
    .toLowerCase()
    .split(' ')
    .map(word =>
      exceptions.includes(word) ? word : word[0].toUpperCase() + word.slice(1)
    )
    .join(' ');
  return capitalize(titleCase);
};

console.log(convertTitleCase('this is a nice title'));
console.log(convertTitleCase('this is a LONG title but not too long'));
*/

// Aula 167 - Code Challenge

/* 
Julia and Kate are still studying dogs, and this time they are studying if dogs are eating too much or too little.
Eating too much means the dog's current food portion is larger than the recommended portion, and eating too little is the opposite.
Eating an okay amount means the dog's current food portion is within a range 10% above and 10% below the recommended portion (see hint).


*/

//TEST DATA:
const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];

// 1. Loop over the array containing dog objects, and for each dog, calculate the recommended food portion and add it to the object as a new property. Do NOT create a new array, simply loop over the array. Forumla: recommendedFood = weight ** 0.75 * 28. (The result is in grams of food, and the weight needs to be in kg)

// console.log(dogs);

dogs.forEach(
  ele => (ele.recommendedFood = Math.trunc(ele.weight ** 0.75 * 28))
);

console.log(dogs);

// 2. Find Sarah's dog and log to the console whether it's eating too much or too little. HINT: Some dogs have multiple owners, so you first need to find Sarah in the owners array, and so this one is a bit tricky (on purpose) 🤓

// console.log(dogs[2].owners.includes('Sarah'));

dogs.forEach(function (ele) {
  if (ele.owners.includes('Sarah')) {
    if (ele.curFood > ele.recommendedFood * 1.1) {
      console.log('Está comendo muito!');
    } else if (ele.curFood < ele.recommendedFood * 0.9) {
      console.log('Está comendo pouco');
    } else if (
      ele.curFood > ele.recommendedFood * 0.9 &&
      ele.curFood < ele.recommendedFood * 1.1
    ) {
      console.log('Está comendo bem!');
    }
  }
});

// 3. Create an array containing all owners of dogs who eat too much ('ownersEatTooMuch') and an array with all owners of dogs who eat too little ('ownersEatTooLittle').

const ownersEatTooLittle = dogs
  .filter(ele => ele.curFood < ele.recommendedFood * 0.9)
  .flatMap(dog => dog.owners);

const ownersEatTooMuch = dogs
  .filter(ele => ele.curFood > ele.recommendedFood * 1.1)
  .flatMap(dog => dog.owners);

console.log(ownersEatTooLittle);
console.log(ownersEatTooMuch);

// 4. Log a string to the console for each array created in 3., like this: "Matilda and Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat too little!"

// ownersEatTooLittle.forEach(function (ele) {
//   console.log(`${ownersEatTooLittle.join(' and ')}'s dogs eat to little`);
// });
console.log(`${ownersEatTooLittle.join(' and ')}'s dogs eat to little`);

console.log(`${ownersEatTooMuch.join(' and ')}'s dogs eat to much`);

// 5. Log to the console whether there is any dog eating EXACTLY the amount of food that is recommended (just true or false)

console.log(dogs.some(dog => dog.curFood === dog.recommendedFood));

// 6. Log to the console whether there is any dog eating an OKAY amount of food (just true or false)

const checkEat = dog =>
  dog.curFood > dog.recommendedFood * 0.9 &&
  dog.curFood < dog.recommendedFood * 1.1;

console.log(
  dogs.some(function (ele) {
    const result = checkEat(ele);
    return result;
  })
);

// 7. Create an array containing the dogs that are eating an OKAY amount of food (try to reuse the condition used in 6.)

console.log(dogs.filter(checkEat));

// 8. Create a shallow copy of the dogs array and sort it by recommended food portion in an ascending order (keep in mind that the portions are inside the array's objects)

const dogCopy = dogs
  .slice()
  .sort((a, b) => a.recommendedFood - b.recommendedFood);

console.log(dogCopy);
