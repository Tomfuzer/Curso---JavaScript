'use strict';

const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const openingHours = {
  //ES6 feature
  [weekdays[3]]: {
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
};
/*
// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
*/
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  //ES6 new function declaration method
  order(starterIndex, mainIndex) {
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

  //ES6 enhanced object literals
  openingHours,
};
/*
//Aula 116 - Sets

const orderSet = new Set([
  'Pasta',
  'Pizza',
  'Pizza',
  'Risotto',
  'Pasta',
  'Pizza',
]);

console.log(orderSet);
// console.log(new Set('Jonas'));
console.log(orderSet.size);
console.log(orderSet.has('Pizza'));
// console.log(orderSet.has('Tom'));
orderSet.add('Garlic Bread');
orderSet.add('Garlic Bread');
orderSet.delete('Risotto');
// orderSet.clear();
console.log(orderSet);

for (const order of orderSet) console.log(order);

//Example
const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
const staffUnique = [...new Set(staff)];
console.log(staffUnique);
console.log(
  new Set(['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']).size
);
console.log(new Set('hamiltonfuzerdeoliveira').size);
*/

/*
//Aula 115 - Coding Challenge #2
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },

  printGoals: function (...players) {
    // console.log(players);
    // for (let i = 0; i < players.length; i++) {
    console.log(`Foram marcados ${players.length} gols`);
    // }
  },
};

// console.log(game.scored);
const ordem = Object.keys(game.scored);
// console.log(ordem);
const marcadores = Object.values(game.scored);
// console.log(marcadores);
const entries = Object.entries(game.scored);
// console.log(entries);

for (const [key, values] of entries) {
  console.log(`Goal ${Number(key) + 1}: ${values}`);
}

const oddsEntries = Object.entries(game.odds);
// console.log(oddsEntries);
const oddsValues = Object.values(game.odds);
// console.log(oddsValues);
// const oddsKeys = Object.keys(game.odds);
// console.log(oddsKeys);

let avgOdd = 0;
for (const values of oddsValues) {
  // console.log(values);
  avgOdd += values;
}
console.log(avgOdd / oddsEntries.length);

//Usar a sintaxe game[key] pra referencia o game.team1 e trazer o nome correto do time - ?? notação pra verificar nullish, caso do draw e então inserir o texto correto.
for (const [key, values] of oddsEntries) {
  console.log(`Odd of victory ${game[key] ?? 'draw'}: ${values}`);
}
*/

/*
// Aula 114 - Looping Objects: Objects keys, values and entries.

const properties = Object.keys(openingHours);
console.log(properties);
let openStr = `We are open on ${properties.length} days: `;

for (const day of properties) {
  openStr += `${day}, `;
}
console.log(openStr);

//Property Values
const values = Object.values(openingHours);
console.log(values);

//Entire object
const entries = Object.entries(openingHours);
// console.log(entries);

//Muito hardcore essa parte... usou destructuring
// [key, value]...
for (const [key, { open, close }] of entries) {
  console.log(`On ${key} we open at ${open} and close at ${close}`);
}
*/

/*
//Aula 113 - Optional Chaining

// if (restaurant.openingHours && restaurant.openingHours.mon)
// console.log(restaurant.openingHours.mon.open);

// WITH optional chaining
// console.log(restaurant.openingHours.mon?.open);
// console.log(restaurant.openingHours?.mon?.open);

const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
for (const day of days) {
  // console.log(day);
  const open = restaurant.openingHours[day]?.open ?? 'closed';
  console.log(`On ${day}, we open at ${open}`);
  //restaurant.openingHours.(o que eu quero acessar) para acessar algo via parametro como no exemplo acima em que pegamos o valor do array e usamos, a sintaxe correta é' restaurant.openingHours[]...
}

//Methods

console.log(restaurant.order?.(0, 1) ?? 'Method dos not exist');
console.log(restaurant.orderRisoto?.(0, 1) ?? 'Method dos not exist');

//Arrays

const users = [{ name: 'Tom', email: 'tomfuzer@gmail.com' }];
// const users = [];

console.log(users[0]?.name ?? 'User array empty');
*/

/*
// Aula 111 - For-of loop

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (const item of menu) console.log(item);

for (const [i, el] of menu.entries()) {
  console.log(`${i + 1}: ${el}`);
}

// console.log([...menu.entries()]);
*/

/*

//Challenge 1

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },

  printGoals: function (...players) {
    // console.log(players);
    // for (let i = 0; i < players.length; i++) {
    console.log(`Foram marcados ${players.length} gols`);
    // }
  },
};

// console.log(game);

// const [bayernPlayers, borrussiaPlayers] = [game.players[0], game.players[1]];
const [bayernPlayers, borrussiaPlayers] = game.players;
console.log(bayernPlayers);
console.log(borrussiaPlayers);

const [bayernGk, ...bayerField] = bayernPlayers; // REST SINTAX!!! - bayernPlayers é o array completo, o fato de utilizar o ...bayerField informa ao JS que todo o conteudo restante do array deve ser armazenado neste novo array (bayerField) criado
console.log(bayernGk);
console.log(bayerField);

const [borrussiaGk, ...borrussiaField] = borrussiaPlayers;
console.log(borrussiaGk);
console.log(borrussiaField);

const allPlayers = [...bayernPlayers, ...borrussiaPlayers];
console.log(allPlayers);

const substitute = ['Thiago', 'Coutinho', 'Perisic'];
// console.log(substitute);
const bayernPlayersFinal = [...bayernPlayers, ...substitute]; // separei todos os valores dos dois arrays em valores 'individuais' para criar um único array com todos os valores e não concatenar
console.log(bayernPlayersFinal);

//Objects
const { team1, x: draw, team2 } = game.odds; // Pra receber o conteúdo das variaveis do objeto dentro de outro objeto eu preciso usar o mesmo nome, caso contrario o JavaScript não sabe como referenciar... posso após a referencia trocar o nome como foi feito no x com a sintaxe "x: 'nomeDesajado'" dessa forma referencio o que quero buscar e já defino um novo nome pra variavel
// console.log(weekdays);
console.log(team1, draw, team2);

game.printGoals('Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels');
game.printGoals(...game.scored);

team1 < team2 && console.log('Team 1 is more likely to win');
team2 < team1 && console.log('Team 2 is more likely to win');

*/

/*

//Aula 109 - Logical Assignment Operators

const rest1 = {
  name: 'TomRest',
  // numGuests: 20,
  numGuests: 0,
};

const rest2 = {
  name: 'TomRest',
  owner: 'Hamilton Fuzer',
};
//OR assignment operator
// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;

// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;

//nullish assignment operator (null or undefined)
//??= se o valor verificador for nulo ou undefined, no exemplo acima com ||= ele verificar se o valor é falso, 0 é falso mas é o valor real então deve ser preservado
rest1.numGuests ??= 10;
rest2.numGuests ??= 10;

//AND assignment operator
// rest2.owner = rest2.owner && '<ANONIMO>';
// rest1.owner = rest1.owner && '<ANONIMO>';
rest1.owner &&= '<ANONIMO>';
rest2.owner &&= '<ANONIMO>';

console.log(rest1);
console.log(rest2);
*/

/*
// Aula 108 - Nullish Coalescing Operator

restaurant.numGuests = 0;
const guests = restaurant.numGuests || 10;
console.log(guests);

// Nullish: null and undefined (NOT 0 or '')
const guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect);
*/

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

//Desestruturando um objeto - O nome da variavel referenciada tem que ser igual ao do objeto. OBS: é possível renomear após referenciar
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

const [x, y, z] = arr; // Sintax [] cada variavel dentro da sintax sera um elemento da arry. Quando [] a esquerda da = o JS já sabe que é pra desestruturar
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
