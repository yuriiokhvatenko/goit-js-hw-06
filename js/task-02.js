const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const newList = ingredients.map(ingredient => {
  const newList = document.createElement("li");
  newList.classList.add("item");
  newList.textContent = ingredient;
  return newList;
});

newList.forEach(elem => {
  console.log(elem);
});

const linkToInsert = document.querySelector('#ingredients');
linkToInsert.append(...newList);