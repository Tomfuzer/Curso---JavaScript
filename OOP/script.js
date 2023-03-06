'use strict';

// Aula 207 - OOP in JavaScript

// Aula 208 - Constructor Functions and the new Operator  - Pratica

// Constructor function
const Person = function (firstName, birthYear) {
  //Propriedades instanciadas
  this.firstName = firstName;
  this.birthYear = birthYear;

  //Não criar metódos dentro de construtores
  //   this.calcAge = function(){
  //     console.log(2023 - this.birthYear);
  //   }
};

const tom = new Person('Tom', 1995);
// console.log(tom);

// 1. Novo objeto vazio é criado {}
// 2. Função é criada, this = {}
// 3. {} linkado ao prototype
// 4. A função retorna automaticamente o objeto vazio {}

const rafaela = new Person('Rafaela', 1997);
// console.log(rafaela);

// console.log(tom instanceof Person);

// Aula 209 - Prototypes

// console.log(Person.prototype);

Person.prototype.calcAge = function () {
  console.log(2023 - this.birthYear);
};

// tom.calcAge();
// rafaela.calcAge();

//Object.prototype - topo da cadeia
// console.log(tom.__proto__.__proto__);

const arr = [1, 2, 3, 4, 4, 5];
// console.log(arr.__proto__);

// Aula 211 - Prototypal Inheritance on Built-In Objects

Array.prototype.unique = function () {
  return [...new Set(this)];
}; //retorna um novo array sem elementos repetidos

const h1 = document.querySelector('h1');
// console.dir(x => x + 1);

// 212 - Coding Challenge #1

const Car = function (maker, speed) {
  this.maker = maker;
  this.speed = speed;
};

const bmw = new Car('BMW', 90);
const mercedes = new Car('Mercedes', 80);

console.log(bmw, mercedes);

Car.prototype.accelerate = function () {
  this.speed = this.speed + 10;
  console.log(this.speed);
};

Car.prototype.brake = function () {
  this.speed = this.speed - 5;
  console.log(this.speed);
};

while (bmw.speed < 120) {
  bmw.accelerate();
}

while (mercedes.speed < 95) {
  mercedes.accelerate();
  if (mercedes.speed > 95) {
    mercedes.brake();
  }
}
