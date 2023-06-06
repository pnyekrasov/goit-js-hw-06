const textInputEl = document.querySelector('#validation-input');

textInputEl.addEventListener('blur', ({ currentTarget }) => {
    currentTarget.classList.remove('valid');
    currentTarget.classList.remove('invalid');

    if (currentTarget.value.trim().length === Number(currentTarget.dataset.length))
    {
        currentTarget.classList.add('valid');
        return;  
    }
    currentTarget.classList.add('invalid');
});
