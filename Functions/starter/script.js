'use strict';

// Aula 128
/*
const bookings = [];

const creatBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  //ES5
  //   numPassengers = numPassengers || 1;
  //   price = price || 199;
  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

creatBooking('LH123');
creatBooking('LH123', 2, 800);
creatBooking('LH123', 8);
creatBooking('LH123', undefined, 8);
*/

// Aula 129
/*
const flight = 'LH123';
const tom = {
  name: 'Tomfuzer',
  passport: 14300399735,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'LH999'; //linha não funcionou
  passenger.name = 'Mr.' + passenger.name; //linha funcionou

  if (passenger.passport === 14300399735) {
    alert('Checked in');
  } else {
    alert('Wrong passport');
  }
};

// checkIn(flight, tom);
// console.log(flight);
// console.log(tom);

// const flightNum = flight; // string é um tipo primitivo, ou seja, não é mutável
// const passenger = tom; // quando copiamos um objeto, estamos copiando o endereço de referência de onde aquele objeto esta alocado na memória, ou seja, alterações feitas na função são refletidas no objeto.

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 100000000);
};

newPassport(tom);
checkIn(flight, tom);
*/

// Aula 130
// Aula 131
/*
const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);

  console.log(`Transformed by: ${fn.name}`);
};

transformer('JavaScript is the best!', upperFirstWord);
transformer('JavaScript is the best!', oneWord);

//JS uses callbacks all the time
//Função chamando função
const high5 = function () {
  console.log('👍🙌');
};

document.body.addEventListener('click', high5);

['Tom', 'Rafaela', 'Karen'].forEach(high5);
*/

// Aula 132
/*
const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greeterHey = greet('Hey!'); //Função greet retorna uma função, essa função é armazenada em greeterHey, ou seja, a variável greeterHey na verdade é uma função.
greeterHey('Tom');
greeterHey('Rafaela');

greet('Hello!')('Tom');

//Arrow => chamando arrow
const abc = greeting => name => console.log(`${greeting} ${name}`);

abc('Hello!')('Tommy');
*/

// Aula 133
// Aula 134
/*
const lufthansa = {
  ariline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  //book()...
  book: function (flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.ariline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

// lufthansa.book(239, 'Tom Fuzer');
// lufthansa.book(240, 'Rafa Viana');
// console.log(lufthansa);

const eurowings = {
  ariline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

const book = lufthansa.book;

// book(23, 'Arthur Cecchetti'); Não funciona, this. não aponta corretamente
// book.call(eurowings, 23, 'Arthur Cecchetii');
// console.log(eurowings);
// book.call(lufthansa, 13, 'Hamilton Fuzer');

const swiss = {
  ariline: 'Swiss Air Line',
  iataCode: 'LX',
  bookings: [],
};

// book.call(swiss, 99, 'Neyma Jr.');

// const flightData = [583, 'Bradley Cooper'];
// book.apply(swiss, flightData);
// console.log(swiss);

// book.call(swiss, ...flightData);

// Aula 134
// Bind

const bookEW = book.bind(eurowings); //Atrelou a referência do this contido na função book para o objeto eurowings. Criou uma nova função a partir disso e armazenou em bookEW
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);

// bookEW(78, 'Leonardo DiCaprio');
// console.log(eurowings);

const bookEW23 = book.bind(eurowings, 23); // criou uma nova função bookEW23 a partir da função book, atrelando o this a referência eurowings e já preenchendo um dos parâmetros da função '23' flightnumber

// bookEW23('Rafa Paraquedas');

// With eventlisteners

lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);
  this.planes++;
  console.log(this.planes);
};

document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// Partial application

const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 100));
const addVAT = addTax.bind(null, 0.23);
//bind faz preset de parâmetros pra funções .bind(this, param1, param2, ...)
// addVAT => value => value + value * 0.23;

console.log(addVAT(100));
console.log(addVAT(23));

const addTaxRate = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};

const addVAT2 = addTaxRate(0.3);
console.log(addVAT2(100));
*/

// Aula 135 - coding Challenge
/*
const poll = {
  question: 'What is your favorite programming languege?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  answers: new Array(4).fill(0),
  registerNewAnswer() {
    // let value = window.prompt(
    //   'What is your favourite programming language?\n0: JavaScript\n1: Python\n2: Rust\n3: C++\n(Write option number)'
    // ); -- Tomfuzer
    let value = window.prompt(
      `${this.question}\n${this.options.join('\n')}\n(Write option number)`
    );
    value = Number(value);

    if (value < 0 || value > 3 || typeof value != 'number') {
      alert('Digite uma opção válida!');
    } else if (value === 0) {
      this.answers[0] = this.answers[0] + 1;
    } else if (value === 1) {
      this.answers[1] = this.answers[1] + 1;
    } else if (value === 2) {
      this.answers[2] = this.answers[2] + 1;
    } else if (value === 3) {
      this.answers[3] = this.answers[3] + 1;
    } //Tomfuzer

    // typeof value === 'number' &&
    //   value < this.answers.length &&
    //   this.answers[value]++;

    this.displayResults();
    this.displayResults('string');
  },
  displayResults(type = 'array') {
    if (type === 'array') {
      console.log(this.answers);
    } else if (type === 'string') {
      console.log(`O resultado é: ${this.answers.join(', ')}`);
    }
  },
};
// poll.registerNewAnswer();
// console.log(poll.answers);
const bttn = document.querySelector('.poll');
//Primeira tentativa de chamada sem sucesso, erro identificado: É necessário consertar a referência do this -- Usando .bind(poll) funcionou!
bttn.addEventListener('click', poll.registerNewAnswer.bind(poll));

//Verificar o funcionamento do .call para setar o this.
poll.displayResults.call({ answers: [5, 2, 3] }, 'string');
*/

// Aula 136

/*
// const runOnce = function () {
//   console.log('this will never run again');
// };

//IIFE
(function () {
  console.log('this will never run again');
  const isPrivate = 23; //encapsulamento
})();

// console.log(isPrivate); //Não funciona

(() => console.log('this will ALSO never run again'))();

{
  const isPrivate = 23;
  var notPrivate = 46; // var ... = ignora scope
}

// console.log(isPrivate);
console.log(notPrivate);
*/

// Aula 137
/*
const secureBooking = function () {
  let passengerCount = 0;

  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};

//secureBooking vai retornar uma função, essa função será armazenada na const booker!!!
//booker é uma função
const booker = secureBooking();
//closure, a função continua com acesso ao contexto no qual ela foi criada, podendo acessar as variáveis presentes nele por exemplo
booker();
booker();
booker();

console.dir(booker);
*/
