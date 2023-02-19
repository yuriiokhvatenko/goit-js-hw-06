const input = document.querySelector(`input`)

const makeBorderColor = (event) => {
  return event.addEventListener('blur' , (option) => {
    const inputValueLength = option.currentTarget.value.length
   const inputDataSetLength = event.dataset.length


   if (inputValueLength == inputDataSetLength) {
    input.classList.add("valid");
    input.classList.remove("invalid");
  } else {
    input.classList.add("invalid");
    input.classList.remove("valid");
  }
  })
}

makeBorderColor(input)