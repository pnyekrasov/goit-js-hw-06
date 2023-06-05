const formInputUserNameEl = document.querySelector('#name-input');

const userNameOutputEl = document.querySelector('#name-output');

formInputUserNameEl.addEventListener('input', ( {target} ) => {
    if (target.value.trim() != '') {
        userNameOutputEl.textContent = target.value;
        return;
    }
    userNameOutputEl.textContent = 'Anonymous';
});
    
    
  
