const btnDecrement = document.querySelector('[data-action="decrement"]');
const btnIncrement = document.querySelector('[data-action="increment"]');
const spanValue = document.querySelector('#value');

let counterValue = 0;

const decrement = () => {
    counterValue -= 1;
    spanValue.textContent = counterValue;
    return counterValue;
};
const increment = () => {
    counterValue += 1;
    spanValue.textContent = counterValue;
    return counterValue;
};

btnDecrement.addEventListener('click', decrement);
btnIncrement.addEventListener('click', increment);
