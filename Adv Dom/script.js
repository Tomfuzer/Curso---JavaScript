'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const nav = document.querySelector('.nav');
const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');
const header = document.querySelector('.header');
const allSections = document.querySelectorAll('.section');

///////////////////////////////////////
// Modal window
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

// Page Nav
// 192
// document.querySelectorAll('.nav__link').forEach(function (el) {
//   el.addEventListener('click', function (e) {
//     e.preventDefault();
//     const id = this.getAttribute('href');
//     document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
//   });
// });

// 1.Add eventListener to common parent element
// 2.Determinate what element originated the event

document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault();
  //Matching strategy
  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
}); // Adicionei um evento ao elemento Pai de todos os elementos que eu queria que tivessem esse evento, por conta do princípio de Bubbling mesmo o trigger sendo num elemento filho o elemento Pai consegue chamar executar o evento, adicionei a lógica do e.target pra direcionar qual elemento filho específico chamou o evento, dessa forma ele vai ser executado "pela" visão deste elemento e não do elemento Pai para todos os elementos filhos

// Aula 186
//Selecionando elementos do HTML

// console.log(document.documentElement); // Selecionando o HTML como um todo
// console.log(document.head);
// console.log(document.body);

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
// logo.classList.add('T');
// logo.classList.remove('o');
// logo.classList.toggle('m');
// logo.classList.contains('.');

//Não usar!!!
// logo.className = 'Tom';

// Aula 188 - Smooth Scrolling

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
/*
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
*/

// Aula 192 - Event Delegation
// Código escrito lá em cima na parte de Page Navigation

// Aula 193 - DOM Traversing
/*
const h1 = document.querySelector('h1');

//Going downwards: child

// console.log(h1.querySelectorAll('.highlight'));
// console.log(h1.childNodes);
// console.log(h1.children);
// h1.firstElementChild.style.color = 'white';
// h1.lastElementChild.style.color = 'orangered';

//Going upwards: parents

// console.log(h1.parentNode);
// console.log(h1.parentElement);

// h1.closest('.header').style.background = 'var(--gradient-secondary)';

// h1.closest('h1').style.background = 'var(--gradient-primary)';

//Going sideways: siblings
// console.log(h1.previousElementSibling);
// console.log(h1.nextElementSibling);

// console.log(h1.previousSibling);
// console.log(h1.nextSibling);

// console.log(h1.parentElement.children);
// [...h1.parentElement.children].forEach(function (el) {
//   if (el !== h1) el.style.transform = 'scale(0.5)';
// });
*/

// Aula 194 -

// Tabbed component

tabsContainer.addEventListener('click', function (e) {
  const clicked = e.target.closest('.operations__tab');
  // console.log(clicked);

  //Guard clause
  if (!clicked) return;

  //Remove active CSS classes from elements
  tabs.forEach(t => t.classList.remove('operations__tab--active'));
  tabsContent.forEach(c => c.classList.remove('operations__content--active'));

  //Active tab
  clicked.classList.add('operations__tab--active');

  //Active content area
  // console.log(clicked.dataset.tab);
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add('operations__content--active');
});

// Menu fade animation

const handleHover = function (e) {
  if (e.target.classList.contains('nav__link')) {
    const link = e.target;
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');

    siblings.forEach(el => {
      if (el !== link) el.style.opacity = this;
    });
    logo.style.opacity = this;
  }
};

// Passing "argument" into handler
nav.addEventListener('mouseover', handleHover.bind(0.5));

nav.addEventListener('mouseout', handleHover.bind(1));

// Aula 196 - Sticky Navigation

// const initialCoords = section1.getBoundingClientRect();
// console.log(initialCoords);

// //event scroll fica em window not document
// window.addEventListener('scroll', function () {
//   // console.log(this.window.scrollY);
//   if (this.window.scrollY > initialCoords.top) nav.classList.add('sticky');
//   else nav.classList.remove('sticky');
// });

// Aula 197 - Intersection Observer API

// const obsCallback = function (entries, observer) {
//   entries.forEach(entry => {
//     console.log(entry);
//   });
// };

// const obsOptions = {
//   root: null,
//   threshold: [0, 0.2],
// };

// const observer = new IntersectionObserver(obsCallback, obsOptions);
// observer.observe(section1); //Sempre que a section1 (target) interceder viewport (null) em 10% (0.1) e função será chamada com dois argumentos

const navHeight = nav.getBoundingClientRect().height;

const stickyNav = function (entries) {
  const [entry] = entries;
  // console.log(entry);
  if (!entry.isIntersecting) nav.classList.add('sticky');
  else nav.classList.remove('sticky');
};

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
});
headerObserver.observe(header);

// Aula 198 - Revelar elementos on Scroll c/ Intersection API

const revalSection = function (entries, observer) {
  const [entry] = entries;
  console.log(entry);

  if (!entry.isIntersecting) return;
  entry.target.classList.remove('section--hidden');
  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revalSection, {
  root: null, //when null root = viewport
  threshold: 0.15,
});
allSections.forEach(function (section) {
  sectionObserver.observe(section);
  section.classList.add('section--hidden');
});

//
