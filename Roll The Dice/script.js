"use strict";

const score0El = document.querySelector("#score--0");
const score1El = document.getElementById("score--1");
const diceEl = document.querySelector(".dice");
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");
const currentScoreP0El = document.querySelector("#current--0");
const currentScoreP1El = document.querySelector("#current--1");
const finalScoreP0El = document.querySelector("#score--0");
const finalScoreP1El = document.querySelector("#score--1");
const player0Class = document.querySelector(".player--0");
const player1Class = document.querySelector(".player--1");
let isPlaying;
let currentScore;
let activePlayer , finalScores;

initialState();

//rolling dice
btnRoll.addEventListener("click", function () {
  if (isPlaying) {
    //1.generate dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;

    //2.Display dice
    diceEl.classList.remove("hidden");
    diceEl.setAttribute("src", `dice-${dice}.png`);

    //3. check for rolled: if 1 switch player.
    if (dice != 1) {
      currentScore += dice;
      document.querySelector(`#current--${activePlayer}`).textContent =
        currentScore;
    } else {
      //switch to next player
      switchPlayer();
    }
  }
});

//hold button functionality
btnHold.addEventListener("click", function () {
  if (isPlaying) {
    finalScores[activePlayer] += currentScore;
    document.querySelector(`#score--${activePlayer}`).textContent =
      finalScores[activePlayer];

    if (finalScores[activePlayer] >= 5) {
      isPlaying = false;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add("player--winner");
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove("player--active");
    } else {
      switchPlayer();
    }
  }
});

const switchPlayer = function () {
  document.querySelector(`#current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  document.querySelector(`#current--${activePlayer}`).textContent =
    currentScore;
  player0Class.classList.toggle("player--active");
  player1Class.classList.toggle("player--active");
};

//new game starts
btnNew.addEventListener("click", initialState);   6

function initialState() {
  isPlaying = true; //game state variable
  score0El.textContent = 0;
  score1El.textContent = 0;
  currentScoreP0El.textContent = 0;
  currentScoreP1El.textContent = 0;
  diceEl.classList.add("hidden");

   currentScore = 0;
    activePlayer = 0;
   finalScores = [0, 0];
  player0Class.classList.remove("player--winner");
  player1Class.classList.remove("player--winner");
  player1Class.classList.add("player--active");
  player1Class.classList.remove("player--active");
}
