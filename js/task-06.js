const textInputEl = document.querySelector('#validation-input');


textInputEl.addEventListener('blur', ({ target }) => {
    const textInputLengthEl = textInputEl.value.length;
    console.log(textInputLengthEl)
});
    // if (target.value.trim().length === Number(target.dataset.length)) {

    //     console.log('yes');
    //     target.classList.add('valid');
    // }
    // console.log('no');
    //  target.style.borderColor = '#f44336';
    //     // target.style = #validation-input.invalid ;
    //  });