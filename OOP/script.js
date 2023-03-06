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

console.log(Person.prototype);

Person.prototype.calcAge = function () {
  console.log(2023 - this.birthYear);
};

tom.calcAge();
rafaela.calcAge();
