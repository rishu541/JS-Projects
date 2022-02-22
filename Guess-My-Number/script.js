'use strict';
let secretNumber = Math.ceil(Math.random() * 20);
// console.log(secretNumber);
let score = 20;
let highscore = 0;
const setMessage = (ele, message) => {
  document.querySelector(ele).textContent = message;
};
document.querySelector('.check').addEventListener('click', () => {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    setMessage('.message', '⛔ No Number');
  } else if (guess === secretNumber) {
    setMessage('.message', '🎉 Correct Number');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    setMessage('.number', secretNumber);
    if (score > highscore) {
      highscore = score;
      setMessage('.highscore', highscore);
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      score--;
      setMessage(
        '.message',
        guess > secretNumber ? '📈 Too High' : '📉 Too Low'
      );

      setMessage('.score', score);
    } else {
      setMessage('.message', '😥 Your Lost the Game');

      setMessage('.score', 0);
    }
  }
});

document.querySelector('.again').addEventListener('click', () => {
  secretNumber = Math.ceil(Math.random() * 20);

  setMessage('.message', 'Start guessing...');

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  setMessage('.number', '?');
  document.querySelector('.guess').value = ' ';
  setMessage('.score', 20);
});
