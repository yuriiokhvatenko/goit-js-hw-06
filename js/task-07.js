const inputForTask = document.querySelector('#font-size-control');
const spanForTask = document.querySelector('#text');

const fontSizeChanger = () => {
  spanForTask.style.fontSize = `${inputForTask.value}px`;
}

inputForTask.addEventListener('input', fontSizeChanger);
