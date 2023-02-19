// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
// }


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const controls = document.querySelector(`#controls`)
const inputNumberRef = document.querySelector('[type="number"]');
const createBtnRef = document.querySelector('button[data-create]');
const destroyBtnRef = document.querySelector('button[data-destroy]');
const divBoxesRef = document.getElementById(`boxes`)
divBoxesRef.style.display = 'flex';
divBoxesRef.style.flexWrap = 'wrap';
divBoxesRef.style.alignItems = 'center';
divBoxesRef.style.marginTop = '30px';


inputNumberRef.addEventListener(`input`, toogleValue)
createBtnRef.addEventListener(`click`, () => {
  createBoxes(Number(inputNumberRef.value))
})
destroyBtnRef.addEventListener(`click`, destroyBoxesMarkup)

let valueFromForm = 0;
function toogleValue(event) {
  valueFromForm = event.currentTarget.value
  console.log(valueFromForm)
}

function createBoxes(amount) {
  let divArray = [];
  let sizeDefault = 30;

  for(let i = 0; i < amount; i += 1) {
    sizeDefault += 10;
    const divElement = document.createElement(`div`);
    divElement.classList = 'item';
    divElement.style.height = `${sizeDefault}px`;
    divElement.style.width = `${sizeDefault}px`;
    divElement.style.marginRight = '30px';
    divElement.style.marginBottom = '30px';
    divElement.style.backgroundColor = getRandomHexColor();
    divArray.push(divElement)
  }
  
  return divBoxesRef.append(...divArray)
}

function destroyBoxesMarkup() {
  inputNumberRef.value = '';
  return (divBoxesRef.innerHTML = ``)
}