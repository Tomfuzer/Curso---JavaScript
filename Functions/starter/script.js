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

//Aula 129
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
