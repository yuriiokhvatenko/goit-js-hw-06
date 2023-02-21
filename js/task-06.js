const inputForTask = document.querySelector("#validation-input");
const validationOfTheInputValueLength = () => {
  if (inputForTask.value.length === Number(inputForTask.dataset.length)) {
    inputForTask.classList.add('valid');
    inputForTask.classList.remove('invalid');

  } else {
    inputForTask.classList.add('invalid');
    inputForTask.classList.remove('valid');

  }
}

inputForTask.addEventListener('blur', validationOfTheInputValueLength);