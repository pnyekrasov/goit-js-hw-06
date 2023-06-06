function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const userNumberEl = document.querySelector('input');
const createBtnEl = document.querySelector('button');
const destroyBtnEl = createBtnEl.nextElementSibling;
const containerEl = document.querySelector('#boxes')

createBtnEl.addEventListener('click', handleCreateBoxes);
destroyBtnEl.addEventListener('click', handleDestroyBoxes);


function handleCreateBoxes(amount) {
amount = Number(userNumberEl.value);
  for (let index = 0; index < amount; index += 1) {
    const element = document.createElement('div');
    const value = 30 + 10 * index;
    const color = getRandomHexColor();
     element.style.cssText = `width: ${value}px; height: ${value}px; background-color: ${color};`;
    containerEl.appendChild(element);
  };
};

function handleDestroyBoxes() {
  containerEl.innerHTML = '';
  userNumberEl.value = '';
}

