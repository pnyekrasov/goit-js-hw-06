const decrementBtnEl = document.querySelector('button[data-action="decrement"]');

const valueInWindow = document.querySelector('#value');

const incrementBtnEl = document.querySelector('button[data-action="increment"]');

let counterValue = 0;

decrementBtnEl.addEventListener('click', () => {
    counterValue -= 1;
    valueInWindow.textContent = counterValue;})    

incrementBtnEl.addEventListener('click', () =>{
      counterValue += 1;
    valueInWindow.textContent = counterValue;}) 
;
