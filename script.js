const input = document.querySelector('.recipe-input');
const addBtn = document.querySelector('.add-recipe');
const recipeContainer = document.querySelector('.recipe-list');

const reSetAll = document.querySelector('.reSetAll');

const populateUX = () => {
  let parsedData = [];
  if (localStorage.getItem('recipe')) {
    parsedData = JSON.parse(localStorage.getItem('recipe'));
    parsedData.forEach((data) => {
      const contains = document.createElement('div');
      const pEle = document.createElement('p');

      const remove = document.createElement('button');
      pEle.textContent = data.recipe;
      remove.textContent = 'remove';
      remove.classList.add('remove');
      contains.appendChild(pEle);
      contains.appendChild(remove);
      recipeContainer.appendChild(contains);
    });
  }

  return parsedData;
};

populateUX();

// remove functionality
let id = 0;
const addRecipe = () => {
  console.log('hello');
  id += 1;

  let Menu = localStorage.getItem('recipe')
    ? JSON.parse(localStorage.getItem('recipe'))
    : [];
  const recipeInput = input.value;
  const recipeProp = {};
  recipeProp.recipe = recipeInput;
  recipeProp.recipe_id = id;

  Menu.push(recipeProp);
  localStorage.setItem('recipe', JSON.stringify(Menu));
  const contains = document.createElement('div');
  const pEle = document.createElement('p');
  pEle.textContent = recipeInput;
  const remove = document.createElement('button');
  contains.appendChild(pEle);
  remove.textContent = 'remove';
  remove.classList.add(`remove`);
  contains.appendChild(remove);
  recipeContainer.appendChild(contains);
  input.value = '';
};

addBtn.addEventListener('click', addRecipe);

// remove function

recipeContainer.addEventListener('click', (event) => {
  const parsedData = populateUX();

  for (let i = 0; i < parsedData.length; i++) {
    if (event.target.tagName === 'BUTTON') {
      console.log(event.target.tagName);
      const button = event.target;
      const sec = button.parentNode;
      recipeContainer.removeChild(sec);
    }
  }
});
/*
const removeRecipe = (e) => {
  const removeButton = e.target;
  // const elementIndex = removeButton.parentNode.parentNode.children.indexOf(removeButton);
  removeButton.parentNode.parentNode.removeChild(removeButton.parentNode);

  const parsedData = populateUX();

  parsedData.forEach((recipe, index) => {
    recipe.recipe_id = index;
  });

  localStorage.setItem('recipe', JSON.stringify(currentList));
};

//if the document has loaded add event listeners to the

if (document.readyState === 'complete') {
  const removeButtons = document.querySelectorAll('.remove');
  removeButtons.forEach((removeButton) => {
    removeButton.addEventListener('click', removeRecipe);
  });
}
*/
