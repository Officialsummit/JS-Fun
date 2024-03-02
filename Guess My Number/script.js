'use strict';

let correctNumber = Math.floor(Math.random() * 20) + 1;
console.log(correctNumber);

let scoreState = 20;
let highscore = 0;

function displayMsg(msg) {
  document.querySelector('.message').textContent = msg;
}

//if check is clicked
document.querySelector('.check').addEventListener('click', function () {
  const guessedNumber = Number(document.querySelector('.guess').value);
  console.log(correctNumber, guessedNumber);

  //if guess is correct
  if (guessedNumber === correctNumber) {
    displayMsg("You've guessed it right");
    console.log(document.querySelector('.message').textContent);
    document.querySelector('.number').textContent = correctNumber;
    document.querySelector('body').style.backgroundColor = 'Green';
    if (scoreState > highscore) {
      highscore = scoreState;
      document.querySelector('.highscore').textContent = highscore;
    }
    //if no number entered
  } else if (!guessedNumber) {
    displayMsg('You need to enter some number!');
  } 
  //if guessed number is less than correct number
  else if (guessedNumber < correctNumber) {
    if (scoreState > 0) {
      scoreState--;
      displayMsg('Your Guess is too low !');
      document.querySelector('.score').textContent = scoreState;
    } else {
      displayMsg('You lost the game');
      document.querySelector('.score').textContent = scoreState;
    }
  }
   //if guessed number is greater than correct number
  else if (guessedNumber > correctNumber)
    if (scoreState > 0) {
      scoreState--;
      document.querySelector('.message').textContent =
        'Your Guess is too high !';
      document.querySelector('.score').textContent = scoreState;
    } else {
      displayMsg('You lost the game');
      document.querySelector('.score').textContent = scoreState;
    }
});

//function to restart game
const gameRestart = function () {
  correctNumber = Math.floor(Math.random() * 20) + 1;
  scoreState = 20;
  console.log(correctNumber);
  displayMsg('Start Guessing...');
  console.log('again is here');
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.score').textContent = scoreState;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
};

//if again is clicked to restart the game
document.querySelector('.again').addEventListener('click', gameRestart);
