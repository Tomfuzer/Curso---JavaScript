'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

// for (let i = 0; i < btnsOpenModal.length; i++)
//   btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

// Aula 186
//Selecionando elementos do HTML

// console.log(document.documentElement); // Selecionando o HTML como um todo
// console.log(document.head);
// console.log(document.body);

const header = document.querySelector('.header');
const allSections = document.querySelectorAll('.section');
// console.log(allSections);

document.getElementById('section--1'); //Selecionando elementos -ID
const allBtns = document.getElementsByTagName('button'); //... por TagName
// console.log(allBtns);

// console.log(document.getElementsByClassName('btn'));

//Criando e inserindo elementos
//.insertAdjacentHTML

const message = document.createElement('div');
message.classList.add('cookie-message');
message.textContent = 'We use cookied for improved func and analytics';
message.innerHTML =
  'We use cookied for improved func and analytics. <button class="btn btn--close--cookie">Got it!</button>';

// header.prepend(message); //adiciona como primeiro filho do elemento que chamou a função, neste caso o header
header.append(message);
// header.append(message.cloneNode(true));

// header.before(message);
// header.after(message);

//Delete elements

document
  .querySelector('.btn--close--cookie')
  .addEventListener('click', function () {
    // message.remove();
    message.parentElement.removeChild(message); // Old way
  }); //Neste exemplo não precisamos selecionar o elemento message novamete por meio do document.querySelector pois ele já está armazenado numa variável

// Aula 187
//Styles

message.style.backgroundColor = '#37383d';
message.style.width = '120%';

// console.log(message.style.color); //não é possível acessar dessa forma
// console.log(message.style.backgroundColor); // é possível acessar por ser inline style, nós que criamos via JavaScrit

// console.log(getComputedStyle(message)); // getComputedStyle pra ver o que está inserido no CSS...
// console.log(getComputedStyle(message).color);
// console.log(getComputedStyle(message).height);

message.style.height =
  Number.parseFloat(getComputedStyle(message).height, 10) + 30 + 'px';

// document.documentElement.style.setProperty('--color-primary', 'orangered'); //Para alterar uma propriedade custom é preciso utilizar o setProperty

//Attributes
const logo = document.querySelector('.nav__logo');
// console.log(logo.alt);
// console.log(logo.src);
// console.log(logo.className);

logo.alt = 'Bonita e minimalista logo';

//Non-standard
// console.log(logo.designer);
// console.log(logo.getAttribute('designer'));
logo.setAttribute('company', 'Bankist');
// console.log(logo.getAttribute('src'));

const link = document.querySelector('.nav__link--btn');
// console.log(link.href);
// console.log(link.getAttribute('href'));

//Data attributes
// console.log(logo.dataset.versionNumber);

//Classes
logo.classList.add('T');
logo.classList.remove('o');
logo.classList.toggle('m');
logo.classList.contains('.');

//Não usar!!!
logo.className = 'Tom';

// Aula 188 - Smooth Scrolling

const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

btnScrollTo.addEventListener('click', function (e) {
  // e.preventDefault();
  const s1coords = section1.getBoundingClientRect();
  // console.log(s1coords);
  // console.log(e.target.getBoundingClientRect());
  // console.log('Current scroll (X/Y)', window.pageXOffset, pageYOffset);

  // console.log(
  //   'height/width viewport',
  //   document.documentElement.clientHeight,
  //   document.documentElement.clientWidth
  // ); // Verificar tamanho da área de visualização

  //Scrolling

  // window.scrollTo(
  //   s1coords.left + window.pageXOffset,
  //   s1coords.top + window.pageYOffset
  // ); //Entender melhor a dinamica das distâncias

  // window.scrollTo({
  //   left: s1coords.left + window.pageXOffset,
  //   top: s1coords.top + window.pageYOffset,
  //   behavior: 'smooth',
  // }); // Versão legado

  section1.scrollIntoView({ behavior: 'smooth' }); // Versão moderna
});

// Aula 189 - Events
/*
const h1 = document.querySelector('h1');

const alertH1 = function (e) {
  alert('addEventListener: Working');
};

// h1.onmouseenter = function (e) {
//   alert('addEventListener: Working');
// };

h1.addEventListener('mouseenter', alertH1);

setTimeout(() => h1.removeEventListener('mouseenter', alertH1), 3000);
*/

// Aula 190 - Bubbling and Capturing

//Aula conceitual

// Aula 191 - Event Propagation

// rgb(255,255,255)

const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);
const randomColor = () =>
  `rgb(${randomInt(0, 255)},${randomInt(0, 255)}, ${randomInt(0, 255)})`;

document.querySelector('.nav__link').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor();
  console.log('LINK', e.target, e.currentTarget); //e.target aonde o evento aconteceu!
  //Stop propagation
  // e.stopPropagation();
});

document.querySelector('.nav__links').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor();
  console.log('CONTAINER', e.target, e.currentTarget);
});

document.querySelector('.nav').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor();
  console.log('NAV', e.target, e.currentTarget);
});

// Aula 192 - Event Delegation
