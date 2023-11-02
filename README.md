# Guessing Game with JavaScript

this whre user can play a online web game
by using the following steps

1.  users will be able to guess my number for the game
2.  user will able to guess fronm a number range between 1 to 20.
3.  the game keeps recored of your highest score and your current score

## Color Reference

| Color       | Hex                                                              |
| ----------- | ---------------------------------------------------------------- |
| Green Color | ![#60b347](https://via.placeholder.com/10/60b347?text=+) #60b347 |
| White Color | ![#eee](https://via.placeholder.com/10/eee?text=+) #eee          |
| Black Color | ![#222](https://via.placeholder.com/10/222?text=+) #222          |

================ HARMONY2K =======================

## Badges

Add badges from somewhere like: [shields.io](https://shields.io/)

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)
[![GPLv3 License](https://img.shields.io/badge/License-GPL%20v3-yellow.svg)](https://opensource.org/licenses/)
[![AGPL License](https://img.shields.io/badge/license-AGPL-blue.svg)](http://www.gnu.org/licenses/agpl-3.0)

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`API_KEY`

`ANOTHER_API_KEY`

## 🚀 About Me

My focus is on bringing ideas to life through front-end web designs 💻, as well as UX and UI designs using Adobe XD. I've designed websites across various categories and levels of complexity.

## Usage/Examples

```html part
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <link rel="stylesheet" href="style.css" />
    <title>Guess My Number!</title>
  </head>
  <body>
    <header>
      <h1>Guess My Number!</h1>
      <p class="between">(Between 1 and 20)</p>
      <button class="btn again">Again!</button>
      <div class="number">?</div>
    </header>
    <main>
      <section class="left">
        <input type="number" class="guess" />
        <button class="btn check">Check!</button>
      </section>
      <section class="right">
        <p class="message">Start guessing...</p>
        <p class="label-score">💯 Score: <span class="score">20</span></p>
        <p class="label-highscore">
          🥇 Highscore: <span class="highscore">0</span>
        </p>
      </section>
    </main>
    <script src="script.js"></script>
  </body>
</html>

<!--  CSS part  -->

@import
url('https://fonts.googleapis.com/css?family=Press+Start+2P&display=swap'); * {
margin: 0; padding: 0; box-sizing: inherit; } html { font-size: 62.5%;
box-sizing: border-box; } body { font-family: 'Press Start 2P', sans-serif;
color: #eee; background-color: #222; /* background-color: #60b347; */ } /*
LAYOUT */ header { position: relative; height: 35vh; border-bottom: 7px solid
#eee; } main { height: 65vh; color: #eee; display: flex; align-items: center;
justify-content: space-around; } .left { width: 52rem; display: flex;
flex-direction: column; align-items: center; } .right { width: 52rem; font-size:
2rem; } /* ELEMENTS STYLE */ h1 { font-size: 4rem; text-align: center; position:
absolute; width: 100%; top: 52%; left: 50%; transform: translate(-50%, -50%); }
.number { background: #eee; color: #333; font-size: 6rem; width: 15rem; padding:
3rem 0rem; text-align: center; position: absolute; bottom: 0; left: 50%;
transform: translate(-50%, 50%); } .between { font-size: 1.4rem; position:
absolute; top: 2rem; right: 2rem; } .again { position: absolute; top: 2rem;
left: 2rem; } .guess { background: none; border: 4px solid #eee; font-family:
inherit; color: inherit; font-size: 5rem; padding: 2.5rem; width: 25rem;
text-align: center; display: block; margin-bottom: 3rem; } .btn { border: none;
background-color: #eee; color: #222; font-size: 2rem; font-family: inherit;
padding: 2rem 3rem; cursor: pointer; } .btn:hover { background-color: #ccc; }
.message { margin-bottom: 8rem; height: 3rem; } .label-score { margin-bottom:
2rem; }
<!-- -JavaScript ----- -->
'use strict'; /* console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = '🎉 Correct Number!';
document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;
document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value); */ let secretNumber =
Math.trunc(Math.random() * 20) + 1; let score = 20; let highscore = 0; const
displayMessage = function (message) {
document.querySelector('.message').textContent = message; };
document.querySelector('.check').addEventListener('click', function () { const
guess = Number(document.querySelector('.guess').value); console.log(guess,
typeof guess); // When there is no input if (!guess) { //
document.querySelector('.message').textContent = '⛔️ No number!';
displayMessage('⛔️ No number!'); // When player wins } else if (guess ===
secretNumber) { // document.querySelector('.message').textContent = '🎉 Correct
Number!'; displayMessage('🎉 Correct Number!');
document.querySelector('.number').textContent = secretNumber;
document.querySelector('body').style.backgroundColor = '#60b347';
document.querySelector('.number').style.width = '30rem'; if (score > highscore)
{ highscore = score; document.querySelector('.highscore').textContent =
highscore; } // When guess is wrong } else if (guess !== secretNumber) { if
(score > 1) { // document.querySelector('.message').textContent = // guess >
secretNumber ? '📈 Too high!' : '📉 Too low!'; displayMessage(guess >
secretNumber ? '📈 Too high!' : '📉 Too low!'); score--;
document.querySelector('.score').textContent = score; } else { //
document.querySelector('.message').textContent = '💥 You lost the game!';
displayMessage('💥 You lost the game!');
document.querySelector('.score').textContent = 0; } } // // When guess is too
high // } else if (guess > secretNumber) { // if (score > 1) { //
document.querySelector('.message').textContent = '📈 Too high!'; // score--; //
document.querySelector('.score').textContent = score; // } else { //
document.querySelector('.message').textContent = '💥 You lost the game!'; //
document.querySelector('.score').textContent = 0; // } // // When guess is too
low // } else if (guess < secretNumber) { // if (score > 1) { //
document.querySelector('.message').textContent = '📉 Too low!'; // score--; //
document.querySelector('.score').textContent = score; // } else { //
document.querySelector('.message').textContent = '💥 You lost the game!'; //
document.querySelector('.score').textContent = 0; // } // } });
document.querySelector('.again').addEventListener('click', function () { score =
20; secretNumber = Math.trunc(Math.random() * 20) + 1; //
document.querySelector('.message').textContent = 'Start guessing...';
displayMessage('Start guessing...');
document.querySelector('.score').textContent = score;
document.querySelector('.number').textContent = '?';
document.querySelector('.guess').value = '';
document.querySelector('body').style.backgroundColor = '#222';
document.querySelector('.number').style.width = '15rem'; });
/////////////////////////////////////// // Coding Challenge #1 /* Implement a
game rest functionality, so that the player can make a new guess! Here is how:
1. Select the element with the 'again' class and attach a click event handler 2.
In the handler function, restore initial values of the score and secretNumber
variables 3. Restore the initial conditions of the message, number, score and
guess input field 4. Also restore the original background color (#222) and
number width (15rem) GOOD LUCK 😀 */ # Hi, I'm Katherine! 👋 ## Screenshots
![App
Screenshot](https://drive.google.com/file/d/1pURLoGGI1V27LMD0P0DzdSSu7uKWAm43/view?usp=drive_link)
```
