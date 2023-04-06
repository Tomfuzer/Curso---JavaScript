// Exporting module
console.log('Exporting module');

//Blocking code
console.log('Fetching users');
await fetch('https://jsonplaceholder.typicode.com/posts');
console.log('Finish fetch users');

const shippingCost = 10;
export const cart = [];

export const addToCart = function (produto, quantidade) {
  cart.push({ produto, quantidade });
  console.log(`${quantidade} ${produto} adicionado ao carrinho`);
};

const totalPrice = 237;
const totalQuantity = 23;

export { totalQuantity as tq, totalPrice };

export default function (produto, quantidade) {
  cart.push({ produto, quantidade });
  console.log(`${quantidade} ${produto} adicionado ao carrinho`);
}
