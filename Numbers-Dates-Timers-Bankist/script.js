'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

/////////////////////////////////////////////////
// Data

// DIFFERENT DATA! Contains movement dates, currency and locale

const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2020-05-27T17:01:17.194Z',
    '2020-07-11T23:36:17.929Z',
    '2020-07-12T10:51:36.790Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT', // de-DE
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2020-06-25T18:49:59.371Z',
    '2020-07-26T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const accounts = [account1, account2];

/////////////////////////////////////////////////
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
        <div class="movements__value">${mov.toFixed(2)}R$</div>
  </div>;`;

    containerMovements.insertAdjacentHTML('afterbegin', html); // parametros de insertAdjacentHTML('aonde colocar', 'o que colocar')
  });
};
//displayMovements(account1.movements); // chamou a função displayMovements que fez a inserção no HTML com as informações específicas da account1

//Balanço - calcular e exibir
const calcDisplayBalance = function (account) {
  account.balance = account.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${account.balance.toFixed(2)} BRL`; // inserir a informação no html/webpage
};

//calcDisplayBalance(account1.movements); // Chamando a função displayBalance

//Função pra inserir os valores do summary, in, out e interest -- Sempre verificar a qual objeto do HTML a função está referenciando, dessa forma é mais fácil compreender o que ela deve mostrar/fazer.
const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes.toFixed(2)}R$`;

  const outcomes = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(outcomes).toFixed(2)}R$`;

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposite => (deposite * acc.interestRate) / 100)
    .filter((int, i, array) => {
      // console.log(array);
      return int >= 1;
    })
    .reduce((acc, mov) => acc + mov, 0);
  labelSumInterest.textContent = `${interest.toFixed(2)}R$`;
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
  if (currentAccount?.pin === +inputLoginPin.value) {
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
  const amount = +inputTransferAmount.value;
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
    +inputClosePin.value === currentAccount.pin
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
  const amount = Math.floor(inputLoanAmount.value);

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

// Aula 170
/*
console.log(23 === 23.0);
console.log(0.1 + 0.2 === 0.3); //false JavaScript limitations

console.log(Number.parseInt('30px', 10));
console.log(Number.parseInt('e23', 10)); //NaN

console.log(Number.parseFloat('2.5rem'));
console.log(Number.parseInt('2.5rem'));

console.log(Number.isNaN(20));
console.log(Number.isNaN(+'20X'));
console.log(Number.isNaN(23 / 0));

//Check if value is number -- Esse eh o bom!
console.log(Number.isFinite(23 / 0));
console.log(Number.isFinite('20'));

console.log(Number.isInteger(23));
console.log(Number.isInteger(23 / 0));
*/

// Aula 171
/*
console.log(Math.sqrt(25));
console.log(25 ** (1 / 2));

console.log(Math.max(5, 18, 23, 11, 2));
console.log(Math.min(5, 18, 23, 11, 2));

console.log(Math.PI * Number.parseFloat('10px') ** 2);

console.log(Math.trunc(Math.random() * 6) + 1);

const randomInt = (min, max) =>
  Math.trunc(Math.random() * (max - min) + 1) + min;

console.log(randomInt(10, 20));

//Rounding integers
console.log(Math.trunc(23.3));

//Arredonda pra cima
console.log(Math.ceil(23.3));

//Arredonda pra baixo
console.log(Math.floor(23.3));

//Rouding decimals
console.log((2.7).toFixed(0)); //toFixed retorna string
console.log((2.7).toFixed(2));
console.log((2.7).toFixed(3));
console.log(+(2.752).toFixed(3));
*/

// Aula 172

//Remainder - resto da divisão...
/*
console.log(5 % 2);

console.log(8 % 3);

const isEven = n => n % 2 === 0;
console.log(isEven(8));
console.log(isEven(23));
console.log(isEven(77));

labelBalance.addEventListener('click', function () {
  [...document.querySelectorAll('.movements__row')].forEach(function (row, i) {
    if (i % 2 === 0) row.style.backgroundColor = 'orangered';
    if (i % 3 === 0) row.style.backgroundColor = 'blue';
  });
});
*/

// Aula 173
