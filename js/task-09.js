function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
 
const backgroundColorBodyEl = document.querySelector('body');

const nameBackgroundColorBodyEl = document.querySelector('.color');

const changeBackgroundColorBodyBtnEl = document.querySelector('.change-color');

changeBackgroundColorBodyBtnEl.addEventListener('click', () => {
  const generatedСolor = getRandomHexColor();
  backgroundColorBodyEl.style.backgroundColor = generatedСolor;
   nameBackgroundColorBodyEl.textContent = generatedСolor;

})
