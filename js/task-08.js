const elements = {
    formEl: document.querySelector('.login-form'),
    formsLabelInput: document.querySelectorAll('input '),
    formSubmitBtnEl: document.querySelector('button'),
};
console.log(elements.formsLabelInput);
elements.formsLabelInput[0].addEventListener('input', ({ target }) => {
    console.log(123);
    console.log(target.value)
});
//     console.log(elements.formsLabelInput[0]);
//     if (target.value.trim() = '') {
//         console.log(Yes);
//         alert('Attention! Fill in all the fields');
//     };
// });

elements.formEl.addEventListener('submit', (e) => {
    e.preventDefault();

    console.log('Hi');
    elements.formEl.reset();
});