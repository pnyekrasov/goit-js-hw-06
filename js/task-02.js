const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsBoxEl = document.querySelector('#ingredients');

const markupIngredients = units => {
  return units.map(unit => {
    const LiEl = document.createElement('li');
    LiEl.textContent = unit;
    LiEl.classList.add('item');
    return LiEl;
  
  }
  );
};

const elementsArray = markupIngredients(ingredients);

ingredientsBoxEl.append(...elementsArray);

console.log(ingredientsBoxEl);