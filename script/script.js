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
const btn = document.querySelector('.btn');

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
    firstPlayerPoints.textContent = ++Points.firstPlayer;
  } else if (Score.secondPlayer > Score.firstPlayer) {
    secondPlayer.classList.add('win');
    textSecond.textContent = 'Wygrywasz!!!🎉🎉🎉';
    secondPlayerPoints.textContent = ++Points.secondPlayer;
  } else {
    firstPlayer.classList.add('win');
    secondPlayer.classList.add('win');
    textSecond.textContent = 'Remis 👑👑';
    textFirst.textContent = 'Remis 👑👑';
  }
  photo.src = 'img/tył.jpg';
}
function refresh() {
  Score.firstPlayer = 0;
  Score.secondPlayer = 0;
  flag = true;
  click = 0;
  firstPlayer.classList.remove('win');
  secondPlayer.classList.remove('win');
  firstPlayerScore.textContent = 0;
  secondPlayerScore.textContent = 0;
  textFirst.textContent = '';
  textSecond.textContent = '';
}

function addPoints(point) {
  if (flag) {
    firstPlayer.classList.add('active');
    Score.firstPlayer += point;
    firstPlayerScore.textContent = Score.firstPlayer;
  } else {
    Score.secondPlayer += point;
    secondPlayerScore.textContent = Score.secondPlayer;
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
    firstPlayerScore.textContent =
      Score.firstPlayer <= 21 ? Score.firstPlayer : (Score.firstPlayer = 0);
    flag = !flag;
    if (!flag) {
      firstPlayer.classList.remove('active');
      secondPlayer.classList.add('active');
    }
  } else {
    secondPlayerScore.textContent =
      Score.secondPlayer <= 21 ? Score.secondPlayer : (Score.secondPlayer = 0);
    secondPlayer.classList.remove('active');
    whoWon();
    setTimeout(refresh, 2000);
  }
}

Play.addEventListener('click', StartGame);
stop.addEventListener('click', playerChange);
