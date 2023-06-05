const textInputEl = document.querySelector('#validation-input');

textInputEl.addEventListener('blur', ({ target }) => {
    target.classList.remove('valid');
    target.classList.remove('invalid');

    if (target.value.trim().length === Number(target.dataset.length))
    {
        target.classList.add('valid');
        return;  
    }
    target.classList.add('invalid');
});
