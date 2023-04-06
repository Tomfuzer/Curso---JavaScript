// Importing module
// import { addToCart, tq, TotalPrice as price } from './shoppingCart.js';

// console.log('Importing module');

// addToCart('pães', 5);
// console.log(tq, price);

// import * as ShoppingCart from './shoppingCart.js';

// ShoppingCart.addToCart('pães', 3);
// console.log(ShoppingCart.totalPrice);

import add, { cart } from './shoppingCart.js';
// add('pizzas', 3);
// add('maças', 4);
// add('bananas', 5);
// console.log(cart);

// const res = await fetch('https://jsonplaceholder.typicode.com/posts');
// const data = await res.json();
// console.log(data);
// console.log('Alguma coisa');

const getLastPost = async function () {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await res.json();
  //   console.log(data);

  return { title: data.at(-1).title, text: data.at(-1).body };
};

// const lastPost = getLastPost();
// console.log(lastPost);

//Not very clean
// lastPost.then(last => console.log(last));

const lastPost2 = await getLastPost();
console.log(lastPost2);
