const navEl = document.querySelector('#categories');
console.log(navEl);

const calculateСategories = (navEl) => {
  let quantityСategories = 0;
navEl.forEach(i => {
    quantityСategories += i
});

  return quantityСategories;
}



console.log(calculateСategories);