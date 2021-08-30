const Play = document.querySelector('.random');
const stop = document.querySelector('.stop');
const firstPlayer = document.querySelector('.first-player');
const secondPlayer = document.querySelector('.second-player');
const firstPlayerScore = document.querySelector('.first-player  .score span');
const firstPlayerPoints = document.querySelector('.first-player p');
const secondPlayerScore = document.querySelector('.second-player span');
const secondPlayerPoints = document.querySelector('.second-player p');
const photo = document.getElementById('photo');
const textFirst = document.getElementById('text-first');
const textSecond = document.getElementById('text-second');

let Score = {
  firstPlayer: 0,
  secondPlayer: 0,
};
let Points = {
  firstPlayer: 0,
  secondPlayer: 0,
};
let flag = true;
let click = 0;

function whoWon() {
  if (Score.firstPlayer > Score.secondPlayer) {
    firstPlayer.classList.add('win');
    textFirst.textContent = 'Wygrywasz!!!🎉🎉🎉';
  } else if (Score.secondPlayer > Score.firstPlayer) {
    secondPlayer.classList.add('win');
    textSecond.textContent = 'Wygrywasz!!!🎉🎉🎉';
  } else {
    firstPlayer.classList.add('win');
    secondPlayer.classList.add('win');
    textSecond.textContent = 'Remis 👑👑';
    textFirst.textContent = 'Remis 👑👑';
  }
  photo.src = 'img/tył.jpg';
}

function addPoints(point) {
  if (flag) {
    firstPlayer.classList.add('active');
    Points.firstPlayer += point;
    Score.firstPlayer = Points.firstPlayer;
    firstPlayerPoints.textContent = Points.firstPlayer;
  } else {
    Points.secondPlayer += point;
    Score.secondPlayer = Points.secondPlayer;
    secondPlayerPoints.textContent = Points.secondPlayer;
  }
}

function StartGame() {
  if (click <= 1) {
    const rand = Math.floor(Math.random() * 10 + 2);
    photo.src = `img/${rand}.jpg`;
    addPoints(rand);
  }
}

function playerChange() {
  click++;
  if (click <= 1) {
    firstPlayerPoints.textContent = 0;
    firstPlayerScore.textContent =
      Score.firstPlayer <= 21 ? Score.firstPlayer : (Score.firstPlayer = 0);
    flag = !flag;
    if (!flag) {
      firstPlayer.classList.remove('active');
      secondPlayer.classList.add('active');
    }
  } else {
    secondPlayer.classList.remove('active');
    secondPlayerPoints.textContent = 0;
    secondPlayerScore.textContent =
      Score.secondPlayer <= 21 ? Score.secondPlayer : (Score.secondPlayer = 0);
    whoWon();
  }
}

Play.addEventListener('click', StartGame);
stop.addEventListener('click', playerChange);
