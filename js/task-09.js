function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btn = document.querySelector('.change-color');
const span = document.querySelector('.color');
const body = document.querySelector('body');

const makeBgColor = () => {
  const clr = getRandomHexColor();
  body.style.backgroundColor = clr;
  span.textContent = clr;
}

btn.addEventListener(`click`, makeBgColor);
