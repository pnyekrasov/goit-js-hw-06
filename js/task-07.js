const formFontSizeEl = document.querySelector('#font-size-control');

const textFontSizeEl = document.querySelector('#text');

formFontSizeEl.addEventListener('input', ({ currentTarget }) => textFontSizeEl.style.fontSize = `${currentTarget.value}px`);