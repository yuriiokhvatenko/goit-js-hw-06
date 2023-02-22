function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const form = document.querySelector('#controls');
console.log(controls);
const buttonCreate = document.querySelector('[data-create]');
console.log(buttonCreate);
const buttonDestroy = document.querySelector('[data-destroy]');
console.log(buttonDestroy);
const inputField = document.querySelector('[type="number"]');
console.log(inputField);
const creatingBoxes = document.querySelector('#boxes');


// console.log(createParagraphInBox);

const createBoxes = (amount) => {
  amount = inputField.value;
  const arrayOfBox = [];
  for (let i = 0; i < amount; i += 1) {
    const box = document.createElement('div');

    box.style.backgroundColor = getRandomHexColor();
    box.style.width = `${30 + 10 * i}px`;
    box.style.height = `${30 + 10 * i}px`;
    box.style.borderRadius = '15%';
    const boxWidth = box.style.width;
    const createParagraphInBox = document.createElement('p');
    createParagraphInBox.textContent = `${box.style.width}px`;
    createParagraphInBox.style.fontSize = `10px`;
    box.append(createParagraphInBox);
    console.log(boxWidth);


    arrayOfBox.push(box);
  }
  creatingBoxes.style.display = 'flex';
  creatingBoxes.style.flexWrap = 'wrap';
  creatingBoxes.style.gap = '15px';

  return creatingBoxes.append(...arrayOfBox);
  
}







const destroyBoxes = () => {
  inputField.value = '';
  return creatingBoxes.innerHTML = " ";
}

buttonCreate.addEventListener('click', createBoxes);
buttonDestroy.addEventListener('click', destroyBoxes);
