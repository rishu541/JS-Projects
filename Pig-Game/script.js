'use strict';
// Selectors
const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');

let scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;
let playing = true;

const switchPlayer = () => {
  currentScore = 0;
  document.getElementById(`current--${activePlayer}`).textContent =
    currentScore;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};
// Starter
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

// Rolling the Dice
btnRoll.addEventListener('click', () => {
  if (playing) {
    // Generate Random Dice Number
    const dice = Math.ceil(Math.random() * 6);
    // Display the Dice Roll
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;
    // Check if dice =1
    if (dice !== 1) {
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      // Switch the Player
      switchPlayer();
    }
  }
});

btnHold.addEventListener('click', () => {
  if (playing) {
    // 1. save current score
    scores[activePlayer] += currentScore;
    currentScore = 0;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    // 2. Checkout if activeplayer has won
    if (scores[activePlayer] >= 20) {
      playing = false;
      diceEl.classList.add('hidden');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      // 3 if not then switch the player
      switchPlayer();
    }
  }
});

// Resetting the Game
btnNew.addEventListener('click', () => {
  playing = true;
  document.querySelectorAll('.player').forEach(e => {
    e.classList.remove('player--winner');
    e.classList.remove('player--active');
  });
  document.querySelector(`.player--0`).classList.add('player--active');
  diceEl.classList.add('hidden');
  setZero(current0El);
  setZero(current1El);
  setZero(document.getElementById('score--0'));
  setZero(document.getElementById('score--1'));

  scores[0] = 0;
  scores[1] = 0;
});
const setZero = ele => {
  ele.textContent = 0;
};
