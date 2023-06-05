const formFontSizeEl = document.querySelector('#font-size-control');

const textFontSizeEl = document.querySelector('#text');

formFontSizeEl.addEventListener('input', ({ target }) => textFontSizeEl.style.fontSize = `${target.value}px`);