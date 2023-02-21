const formForTask = document.querySelector('.login-form');
console.log(formForTask);

const getLoginAndPasswordFromForm = (evt) => {
  evt.preventDefault();
  if (!evt.currentTarget.elements.password.value || !evt.currentTarget.elements.email.value) {
    alert('All fields must be completed');
  } else {
    const objectForOutput = {
      email: evt.currentTarget.elements.email.value,
      password: evt.currentTarget.elements.password.value
    };
    console.log(objectForOutput)
    formForTask.reset();
  }
}

formForTask.addEventListener('submit', getLoginAndPasswordFromForm);