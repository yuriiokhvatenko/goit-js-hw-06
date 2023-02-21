
const inputValue = document.querySelector('#name-input');
const spanForTaskValue = document.querySelector('#name-output');
const inputChange = (evt) => {
  spanForTaskValue.textContent = evt.currentTarget.value;
  if (spanForTaskValue.textContent === '') {
    spanForTaskValue.textContent = 'Anonymous';
  }
  }

inputValue.addEventListener('input', inputChange);