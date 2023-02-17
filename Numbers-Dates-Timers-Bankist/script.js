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
    '2023-02-11T23:36:17.929Z',
    '2023-02-15T10:51:36.790Z',
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

const formatMovementDate = function (date, locale) {
  const calcDaysPassed = (data1, data2) =>
    Math.round(Math.abs((data2 - data1) / (1000 * 60 * 60 * 24)));

  const dayPassed = calcDaysPassed(new Date(), date);

  if (dayPassed === 0) return 'Today';

  if (dayPassed === 1) return 'Yesterday';

  if (dayPassed <= 7) return `${dayPassed} days ago`;

  return new Intl.DateTimeFormat(locale).format(date);

  /*
  const day = `${date.getDate()}`.padStart(2, 0);
  const month = `${date.getMonth() + 1}`.padStart(2, 0);
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
  */
};

const formatCur = function (value, locale, currency) {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currency,
  }).format(value);
};

//Movimentações - calcular e exibir
const displayMovements = function (acc, sort = false) {
  containerMovements.innerHTML = '';
  //habilitando a função de sort implementando na função displayMovements
  const movs = sort
    ? acc.movements.slice().sort((a, b) => a - b)
    : acc.movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const date = new Date(acc.movementsDates[i]);
    const displayDate = formatMovementDate(date, acc.locale);

    const formattedMov = formatCur(mov, acc.locale, acc.currency);

    const html = `<div class="movements__row">
    <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div><div class="movements__date">${displayDate}</div>
        <div class="movements__value">${formattedMov}</div>
  </div>;`;

    containerMovements.insertAdjacentHTML('afterbegin', html); // parametros de insertAdjacentHTML('aonde colocar', 'o que colocar')
  });
};
//displayMovements(account1.movements); // chamou a função displayMovements que fez a inserção no HTML com as informações específicas da account1

//Balanço - calcular e exibir
const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = formatCur(acc.balance, acc.locale, acc.currency); // inserir a informação no html/webpage
};

//calcDisplayBalance(account1.movements); // Chamando a função displayBalance

//Função pra inserir os valores do summary, in, out e interest -- Sempre verificar a qual objeto do HTML a função está referenciando, dessa forma é mais fácil compreender o que ela deve mostrar/fazer.
const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = formatCur(incomes, acc.locale, acc.currency);

  const outcomes = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = formatCur(outcomes, acc.locale, acc.currency);

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposite => (deposite * acc.interestRate) / 100)
    .filter((int, i, array) => {
      // console.log(array);
      return int >= 1;
    })
    .reduce((acc, mov) => acc + mov, 0);
  labelSumInterest.textContent = formatCur(interest, acc.locale, acc.currency);
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
  displayMovements(acc);
  //Display balance
  calcDisplayBalance(acc);
  //Display summary
  calcDisplaySummary(acc);
};

// Login -- Events handler
let currentAccount, timer;

// Fake always log in
// currentAccount = account1;
// updateUi(currentAccount);
// containerApp.style.opacity = 100;

const startLogOutTimer = function () {
  const tick = function () {
    const min = String(Math.trunc(time / 60)).padStart(2, 0);
    const sec = String(time % 60).padStart(2, 0);
    // In each call show r time to UI
    labelTimer.textContent = `${min}:${sec}`;

    // When 0 second - logout
    if (time === 0) {
      clearInterval(timer);
      labelWelcome.textContent = 'Log in to get started';
      containerApp.style.opacity = 0;
    }
    time--;
  };
  // Set time 5 min
  let time = 60;
  // Call every second
  tick();
  const timer = setInterval(tick, 1000);
  return timer;
};

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

    //Create current date and time of login
    const now = new Date();
    const options = {
      hour: 'numeric',
      minute: 'numeric',
      day: 'numeric',
      month: 'numeric',
      year: 'numeric',
      // weekday: 'long',
    };
    // const local = navigator.language;

    labelDate.textContent = new Intl.DateTimeFormat(
      `${currentAccount.locale}`,
      options
    ).format(now);

    //Clear input fields
    inputLoginPin.value = inputLoginUsername.value = '';
    inputLoginPin.blur();
    //Start logout time
    if (timer) clearInterval(timer);
    timer = startLogOutTimer();
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

    //add transfer date/time
    currentAccount.movementsDates.push(new Date().toISOString());
    reciverAccount.movementsDates.push(new Date().toISOString());

    updateUi(currentAccount);
  }
  clearInterval(timer);
  timer = startLogOutTimer();
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
    setTimeout(function () {
      // Add movement / add money requested
      currentAccount.movements.push(amount);
      //Loan date/time
      currentAccount.movementsDates.push(new Date().toISOString());
      // Update UI
      updateUi(currentAccount);

      inputLoanAmount.value = '';
      alert('Valor crédito automaticamente na sua conta.');
    }, 3000);
  } else {
    alert(
      'O valor solicitado é maior do que sua faixa de crédito, tente valores menores.'
    );
  }
  clearInterval(timer);
  timer = startLogOutTimer();
});

let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount, !sorted);
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
/*
//287.460.000.000
const diameter = 287_460_000_000;
console.log(diameter);

const price = 345_99;
console.log(price);

//Apenas conceito, uma representação diferente mas os valores são os mesmos
const transferFee = 15_00;
const transferFee2 = 1_500;

console.log(Number('23000'));
console.log(Number('23_000')); // Não funciona
*/

// Aula 174
/*
console.log(2 ** 53 - 1);
console.log(Number.MAX_SAFE_INTEGER); // maior valor

console.log(49832198189132165498474984n);
console.log(BigInt(115233));

//Operations
console.log(10000n + 10000n);

const huge = 5198132116198198887231n;
const num = 23;

// console.log(huge * num); //erro!
console.log(huge * BigInt(num));

//Exceptions
console.log(20n > 15);
console.log(20n === 20); //false
console.log(typeof 20n);
console.log(20n == 20); //true

console.log(huge + 'Is REALLY big!!!');

//Div
console.log(10n / 3n);
console.log(10 / 3);
*/

// Aula 175
/*
//Create a date

// const now = new Date();
// console.log(now);

// console.log(new Date('Feb 15 2023 16:16:21'));
// console.log(new Date('December 24, 2015'));
// console.log(new Date(account1.movementsDates[0]));

// console.log(new Date(2037, 10, 19, 15, 23, 5));
// console.log(new Date(0));
// console.log(new Date(3 * 24 * 60 * 60 * 1000));

const future = new Date(2037, 10, 19, 15, 23);
console.log(future);
console.log(future.getFullYear());
console.log(future.getMonth());
console.log(future.getDate());
console.log(future.getDay());
console.log(future.getHours());
console.log(future.getMinutes());
console.log(future.getSeconds());
console.log(future.toISOString());
console.log(future.getTime());

console.log(new Date(2142267780000));

console.log(Date.now());

future.setFullYear(2040);
console.log(future);
*/

// Aula 176

// Aula 177

/*
const future = new Date(2037, 10, 19, 15, 23);
console.log(+future);

const calcDaysPassed = (data1, data2) =>
  (data2 - data1) / (1000 * 60 * 60 * 24);

const temp = calcDaysPassed(new Date(2023, 3, 14), new Date(2023, 3, 24));

console.log(temp);
*/

//moment.js

// Aula 178
/*
//Experimentando a API
const now = new Date();
const options = {
  hour: 'numeric',
  minute: 'numeric',
  day: 'numeric',
  month: 'long',
  year: 'numeric',
  weekday: 'long',
};
const local = navigator.language;

labelDate.textContent = new Intl.DateTimeFormat(`local`, options).format(now);
*/

// Aula 179

/*
const num = 13051995.01;

//style unit, currency e percent
const options = {
  style: 'currency',
  unit: 'mile-per-hour',
  currency: 'BRL',
  // useGrouping: false,
};

// console.log(new Intl.NumberFormat('en-US').format(num));
// console.log(new Intl.NumberFormat('pt-BR').format(num));
// console.log(new Intl.NumberFormat('ar-SY').format(num));
console.log(new Intl.NumberFormat(navigator.language, options).format(num));

// Preciso criar o objeto Intl.NumberFormat... e em seguida chamar a função pra variável que eu quero que seja formatada /\
*/

// Aula 180

/*
// const ingredientes = ['peperoni', 'creamchesse'];
// const timePizza = setTimeout(
//   (ing1, ing2) =>
//     console.log(`Here is your pizza with ${ing1}, and ${ing2} 🍕`),
//   3000,
//   ...ingredientes
// );
// console.log('Waiting...');
// if (ingredientes.includes('calabresa')) clearTimeout(timePizza);

// setInterval(function () {}, 1000);
*/
