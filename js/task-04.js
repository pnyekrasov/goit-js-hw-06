const decrementBtnEl = document.querySelector('button[data-action="decrement"]');

const counterValue = document.querySelector('#value');

const incrementBtnEl = document.querySelector('button[data-action="increment"]');

let valueInWindow = 0;

decrementBtnEl.addEventListener('click', () => {
    valueInWindow -= 1;
    counterValue.textContent = valueInWindow; })    

incrementBtnEl.addEventListener('click', () =>{
    console.log('+1');
    valueInWindow += 1;console.log(valueInWindow);
    return valueInWindow;
});
