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
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  //   const guess = (document.querySelector('.message').textContent =
  //     'Correct Number ✈️');
  console.log(guess, typeof guess);
  //   console.log(valuescore);
  if (!guess) {
    document.querySelector('.message').textContent = '🔐 no number inputed';
  }
});

// === implementing the game logic
