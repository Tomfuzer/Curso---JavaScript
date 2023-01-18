'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = '20:00',
    address,
  }) {
    // Desestruturando o obj que foi passado como parametro
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Aqui esta o seu delicioso macarrão com ${ing1}, ${ing2} e ${ing3}`
    );
  },

  orderPizza: function (mainIngridient, ...otherIngridients) {
    console.log(mainIngridient);
    console.log(otherIngridients);
  },

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

/**/
// Aula 108 - Nullish Coalescing Operator

/*
// Aula 107 - && and ||
console.log('------------OR------------');
//Use any data type, return any data type, shot-circuiting
console.log(3 || 'Tom');
console.log('' || 'Tom');
console.log(true || 0);
console.log(undefined || null);

console.log(undefined || 0 || '' || 'Hello' || 23 || null);

restaurant.numGuests = 0;
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);
const guests2 = restaurant.numGuests || 10;
console.log(guests2);
console.log('------------AND------------');
console.log(0 && 'Tom');
console.log(7 && 'Tom');

console.log('Hello' && 23 && null && 'Tom');

if (restaurant.orderPizza) {
  restaurant.orderPizza('Calabresa', 'Catupiry');
}

restaurant.orderPizza && restaurant.orderPizza('Calabresa', 'Cream Cheese');
*/

/*
// Aula 106 - Rest Pattern and Parameters

//1) Destructuring

//SPREAD cuz on right side of the =
const arr = [1, 2, ...[3, 4]];

// REST, cuz on left side of the =
const [a, b, ...others] = [1, 2, 3, 4, 5];
// console.log(a, b, others);

const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
// console.log(pizza, risotto, otherFood);

//Objects
const { sat, ...weekdays } = restaurant.openingHours;
// console.log(weekdays);

//2) Functions
const add = function (...numbers) {
  // console.log(numbers);
  //o parametro ...numbers(REST) pegou os valores indiviaduais passados como parametros e concatenou todos em um unico vetor, dessa forma podemos usar as propriedades numbers.lenght e sum += numbers[i] para fazer a soma total de todos os valores contidos
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];
  console.log(sum);
};

add(2, 3);
add(5, 3, 7, 2);
add(8, 2, 5, 3, 2, 1, 4);

const x = [23, 5, 7];
add(...x);

restaurant.orderPizza('Calabresa', 'Cebola', 'Cogumelos', 'Rucula');
restaurant.orderPizza('Calabresa');

*/

/*
// Aula 105 - Spread Operator (...)

const arr = [7, 8, 9];
const badNewArray = [1, 2, arr[0], arr[1], arr[2]];
// console.log(badNewArray);

const newArr = [1, 2, ...arr]; // != [1,2, arr]
// console.log(newArr);

// console.log(...newArr);

const newMenu = [...restaurant.mainMenu, 'Gnocci']; // Adicionando um valor ao array (sintax ...'nome do array', 'valor')
// console.log(newMenu);

//Copy array

const mainMenuCopy = [...restaurant.mainMenu];

//Join 2 arrays or more

const completeMenu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// console.log(completeMenu);

//Iterables: arrays, stirngs, maps, sets, NOT objects

const str = 'Tom';
const letras = [...str, '', 'S.'];
// console.log(letras);
// console.log(...str);
// console.log('T', 'o');

//Real world example
const ingredients = [
  // prompt('Lets make pasta! Ingredients 1?'),
  // prompt('Ingredients 2?'),
  // prompt('Ingredients 3?'),
];
console.log(ingredients);

// restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]); old way
restaurant.orderPasta(...ingredients); // new way

//Objects

const newRestaurant = { foundedIn: 2023, ...restaurant, founder: 'Tom Fuzer' };
console.log(newRestaurant);

const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Tom Fuzer Macarronaria kkkk';
console.log(restaurantCopy.name);
console.log(restaurant.name);
*/

/*

// Aula 104 - Destructuring Objects

//testando a passagem de obj como parametro pra func
restaurant.orderDelivery({
  time: '22:30',
  address: 'Joaquim Rego, 55',
  mainIndex: 2,
  starterIndex: 2,
});

restaurant.orderDelivery({
  address: 'Joaquim Rego, 55',
  starterIndex: 1,
});

//Desestruturando um objeto
const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
// console.log(restaurantName, hours, tags);

//Definindo valores default
const { menu = [], starterMenu: starters = [] } = restaurant;
// console.log(menu, starters);

// Mutating variables
let a = 111;
let b = 999;

const obj = { a: 23, b: 7, c: 14 };

({ a, b } = obj);
console.log(a, b);

//Nested objects
//Usando sintax pra quebrar objetos e passar apenas os valores para variaveis individuais
const {
  fri: { open: o, close: c }, // Posso renomea-las
  // fri: { open, close },
} = openingHours;
// console.log(open, close);
console.log(o, c);
*/

/*

// Aula 103 - Destructuring Arrays

const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y, z] = arr;
console.log(x, y, z);
console.log(arr);

let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

//Trocando a ordem sem a necessidade de uma variavel temporaria
[main, secondary] = [secondary, main];
console.log(main, secondary);

//console.log(restaurant.order(2, 0));
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

//Recebendo um array dentro de um array por structure
const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;
// console.log(i, j);
//Recebendo um array dentro de um array seperando os valores em variaveis isoladas
const [i, , [j, k]] = nested;
console.log(i, j, k);

//default values
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);
*/
