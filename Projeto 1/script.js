'use strict';
// Aula - 68 até 72
/*----
console.log(document.querySelector('.message').textContent); // Selecionar o elemento document.querySel... ler o texto apropriadamente .textContent
document.querySelector('.message').textContent = '🥳 Correct Number!'; // alterar o conteúdo da mensagem
//console.log(document.querySelector('.message').textContent);
document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;
// Linhas 7 e 8 - selecionando o objeto no HTML e alterando suas propriedades, neste caso, o textContent

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
----*/

// Aula - 73 Events

function gerador() {
  const secretNumber = Math.trunc(Math.random() * 20) + 1;
  return secretNumber;
}
let secretNumber = gerador();
let score = 20;
let highScore = 0;

//addEventListener primeiro parametro: qual eh o evento; segundo parametro: o que fazer quando o evento acontecer (function)

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(typeof guess);

  if (!guess) {
    document.querySelector('.message').textContent = '⛔ NO NUMBER';

    //no input
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🥳 Correct Number!';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('.number').style.width = '30rem';
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = score;
    }

    //player win
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📈 Too High!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = ' YOU LOST THE GAME';
      document.querySelector('.score').textContent = 0;
    }
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📉 Too Low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = ' YOU LOST THE GAME';
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('body').style.backgroundColor = '#222';
  score = 20;
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
  secretNumber = gerador();
});
//addEventListener primeiro parametro: qual eh o evento; segundo parametro: o que fazer quando o evento acontecer (function)
