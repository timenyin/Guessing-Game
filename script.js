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
document.querySelector('.number').textContent = secretNumber;

// == console log for testing ===
// const showNumber = (document.querySelector('.number').textContent = secretNumber);
// console.log(showNumber);

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  //   const guess = (document.querySelector('.message').textContent =
  //     'Correct Number ✈️');
  console.log(guess, typeof guess);

  // === implementing the game logic
  if (!guess) {
    document.querySelector('.message').textContent = '🔐 no number imputed';
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent =
      '😊 you gotten the Correct Number';
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        '🤔 Exceed the Secret Number 🤔';
      score = score - 1;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent =
        '😢 you loss the game 😢';
      document.querySelector('.score').textContent = 0;
    }
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        '🤔 Too Low  for the  Secret Number 🤔';
      score = score - 1;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent =
        '😢 you loss the game 😢';
      document.querySelector('.score').textContent = 0;
    }
  }
});
