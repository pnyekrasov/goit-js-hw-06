
const categoriesEls = document.querySelectorAll('.item');
console.log(`Number of categories: ${categoriesEls.length}`);

categoriesEls.forEach(item => {
  console.log(`Category: ${item.firstElementChild.textContent}`);
  console.log(`Elements: ${item.lastElementChild.querySelectorAll('li').length}`)
;
});





