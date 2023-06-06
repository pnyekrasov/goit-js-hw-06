const formInputUserNameEl = document.querySelector('#name-input');

const userNameOutputEl = document.querySelector('#name-output');

formInputUserNameEl.addEventListener('input', ( {currentTarget} ) => {
    if (currentTarget.value.trim() !== '') {
        userNameOutputEl.textContent = currentTarget.value;
        return;
    }
    userNameOutputEl.textContent = 'Anonymous';
});
    
    
  
