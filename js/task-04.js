const actionEl = document.querySelectorAll('#counter button')
const valueEl = document.querySelector(`#value`)
let startNumber = 0

actionEl[0].addEventListener(`click`, () => {
    startNumber -= 1
    valueEl.textContent = startNumber
})

actionEl[1].addEventListener(`click`, () => {
    startNumber += 1
    valueEl.textContent = startNumber
})