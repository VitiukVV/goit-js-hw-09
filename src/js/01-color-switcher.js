const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');
const body = document.querySelector('body');

let changeColorId = null;
stopBtn.disabled = true;

startBtn.addEventListener('click', startChangeColor);
stopBtn.addEventListener('click', stopChangeColor);

function startChangeColor(event) {
  changeColorId = setInterval(() => {
    body.style.backgroundColor = getRandomHexColor();
  }, 1000);
  startBtn.disabled = true;
  stopBtn.disabled = false;
}

function stopChangeColor(event) {
  clearInterval(changeColor);
  startBtn.disabled = false;
  stopBtn.disabled = true;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
