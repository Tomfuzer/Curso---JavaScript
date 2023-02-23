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

console.log(document.documentElement); // Selecionando o HTML como um todo
console.log(document.head);
console.log(document.body);

const header = document.querySelector('.header');
const allSections = document.querySelectorAll('.section');
console.log(allSections);

document.getElementById('section--1'); //Selecionando elementos -ID
const allBtns = document.getElementsByTagName('button'); //... por TagName
console.log(allBtns);

console.log(document.getElementsByClassName('btn'));

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
