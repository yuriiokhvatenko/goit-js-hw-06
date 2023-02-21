function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


const btn = document.querySelector('.change-color');
const span = document.querySelector('.color');
const makeBgColor = (color) => {
  color = document.body.style.backgroundColor = getRandomHexColor(color);
  span.textContent = `${color}`;
}

btn.addEventListener(`click`, makeBgColor);