'use strict';

//Aula 93 - Scoping
/*
function calcAge(birthYear) {
  const age = 2023 - birthYear;
  function printAge() {
    let output = `${firstName}, You are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      const firstName = 'Steven';
      var millenial = true;
      const str = `Oh, and you're a millenial, ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }

      output = 'New Output';
    }
    // console.log(str);
    console.log(millenial);
    // add(2, 3);
    console.log(output);
  }
  printAge();

  return age;
}

const firstName = 'Tom';
calcAge(1995);
// console.log(age);
// printAge();

//Aula 95 - Hoisting

//Variaveis
// console.log(me);
// console.log(job);
// console.log(year);

// var me = 'Tom';
// let job = 'Gamer';
// const year = 1995;

//Functions
console.log(addDecl(2, 3));
// console.log(addExpr(2, 3));
// console.log(addArrow(2, 3));

function addDecl(a, b) {
  return a + b;
}

var addExpr = function (a, b) {
  return a + b;
};

var addArrow = (a, b) => a + b;

//Example
//Bug por conta do Hoisting, numProducts inicializou com undefined!!!

console.log(numProducts);
if (!numProducts) deleteShopppingCart();

var numProducts = 10;

function deleteShopppingCart() {
  console.log('All products deleted');
}

var x = 1;
let y = 2;
const z = 3;

console.log(x === window.x);
console.log(y === window.y);
console.log(z === window.z);


// Aula 96/97 - This

// console.log(this);

const calcAge = function (birthYear) {
  //   console.log(2022 - birthYear);
  //   console.log(this);
};

calcAge(1995);

//Arrow function nao tem this keyword
const calcAgeArrow = birthYear => {
  //   console.log(2022 - birthYear);
  //   console.log(this);
};

calcAgeArrow(1980);

const tom = {
  year: 1995,
  calcAge: function () {
    console.log(this);
    console.log(2022 - this.year);
  },
};

tom.calcAge();

const rafaela = {
  year: 1997,
};

rafaela.calcAge = tom.calcAge; //copiando um atributo/metodo de um objeto para outro, neste caso uma func.
rafaela.calcAge();
const f = tom.calcAge;
// f();


// Aula 98 - Regular functions != Arrow functions

// var firstName = 'Rafaela'; // var cria variavel dentro do obj global window

const tom = {
  firstName: 'Tom',
  year: 1995,
  calcAge: function () {
    // console.log(this);
    console.log(2022 - this.year);
    //Solucao 1
    // const self = this; // this dentro de regular function eh undefined, para preservar a logica do this criamos a variavel self e atribuimos o valor this a ela. self or that!
    // const isMillenial = function () {
    //   console.log(self);
    //   console.log(self.year >= 1981 && self.year <= 1996);
    //   //   console.log(this.year >= 1981 && this.year <= 1996);
    // };

    //Solucao 2
    //Usar ArrowFunction porque ela vai usar o this do "PAI" a qual ela pertence, neste caso o objeto tom
    const isMillenial = () => {
      console.log(this);
      console.log(this.year >= 1981 && this.year <= 1996);
    };

    isMillenial();
  },
  greet: () => console.log(`Hey ${this.firstName}`), //this dentro do global scope, ou seja, this = window
  //Nao usar arrowFunction como metodo

  //   greet: function () {
  //     console.log(`Hey ${this.firstName}`);
  //   },//Regular function
};

tom.greet();
tom.calcAge();

//arguments keyword

var addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
};

addExpr(2, 5);
addExpr(2, 5, 8, 12);

var addArrow = (a, b) => {
  // Arrow functions nao possuem arguments
  console.log(arguments);
  return a + b;
};

addArrow(2, 5, 8);
*/
