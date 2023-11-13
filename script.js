'use strict';
/* ======
//     for textcontent ====
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Correct Number ✈️';
console.log(document.querySelector('.message').textContent);

console.log(document.querySelector('.score').textContent);
document.querySelector('.score').textContent = '🌟 Recored';
console.log(document.querySelector('.score').textContent);

// Get the values ===
console.log((document.querySelector('.guess').value = 23));

*/

// ========= even list
const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

// == console log for testing ===
// const showNumber = (document.querySelector('.number').textContent = secretNumber);
// console.log(showNumber);

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  //   const guess = (document.querySelector('.message').textContent =
  //     'Correct Number ✈️');
  // console.log(guess, typeof guess);

  // === implementing the game logic
  if (!guess) {
    // document.querySelector('.message').textContent = '🔐 no number imputed';
    displayMessage('🔐 no number imputed');
    //  === when player wins ======
  } else if (guess === secretNumber) {
    // document.querySelector('.message').textContent =
    //   '😊 you gotten the Correct Number';
    displayMessage('😊 you gotten the Correct Number');
    //  ==== showing the guess number ===
    document.querySelector('.number').textContent = secretNumber;
    // ====== DOM for CSS style ======
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    // ==== when guess wrong =====
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(
        guess > secretNumber
          ? '🤔 High Secret Number 🤔'
          : '🤔 Low Secret Number 🤔'
      );
      score = score - 1;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent =
        '😢 you loss the game 😢';
      document.querySelector('.score').textContent = 0;
    }
  }
  // ==== when guess is too high =====
  /*
  else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        '🤔 High Secret Number 🤔';
      score = score - 1;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent =
        '😢 you loss the game 😢';
      document.querySelector('.score').textContent = 0;
    }
    // ==== when guess is too low ===
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        '🤔 Low Secret Number 🤔';
      score = score - 1;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent =
        '😢 you loss the game 😢';
      document.querySelector('.score').textContent = 0;
    }
  }
  */
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  const secretNumber = Math.trunc(Math.random() * 20) + 1;

  // document.querySelector('.message').textContent = 'Start game'; // ===== show the game is addEvenListener is working
  // document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  // ==== CSS =====
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
