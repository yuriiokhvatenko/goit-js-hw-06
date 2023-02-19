const btnDecrement = document.querySelector('[data-action="decrement"]');
const btnIncrement = document.querySelector('[data-action="increment"]');
// const spanValue = document.querySelector('#value');

let counterValue = 0;

const handleDecrementBtnClick = () => {
    counterValue -= 1;
    ololo.textContent = counterValue;
    return counterValue;
};
const handleIncrementBtnClick = () => {
    counterValue += 1;
    ololo.textContent = counterValue;
    return counterValue;
};
btnDecrement.addEventListener('click', handleDecrementBtnClick);
btnIncrement.addEventListener('click', handleIncrementBtnClick);
