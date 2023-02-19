
const form = document.querySelector(`.login-form`)

form.addEventListener(`submit`, handleFormSubmit)

function handleFormSubmit(event) {
  event.preventDefault();
  const formElements = event.currentTarget.elements;
  const email = formElements.email.value;
  const password = formElements.password.value;
 
  if (!email || !password) {
    alert('All inputs must not be empty');
  } else {
     const formOutput = { email, password };
    console.log(formOutput);
    form.reset();
  }
} 