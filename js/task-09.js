// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
// }

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
  const btn = document.querySelector(`button`)
  const span = document.querySelector(`.color`)

  btn.addEventListener(`click`, (value) => {
    value = document.body.style.backgroundColor = getRandomHexColor(value)
    span.textContent = `${value}`
  })
