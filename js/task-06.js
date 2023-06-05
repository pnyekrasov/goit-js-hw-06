const textInputEl = document.querySelector('#validation-input');

// const boderColorEl = document.querySelector('style[valid]');

// console.log(boderColorEl);

textInputEl.addEventListener('blur', ({ target }) => {
    console.log(target);
    if (target.value.trim().length == target.dataset.length) {
        console.log('yes');
       target.style.borderColor = '#4caf50';
        // target.style = #validation-input.valid;
        return;
    }
    console.log('no');
     target.style.borderColor = '#f44336';
        // target.style = #validation-input.invalid ;
     });