const input = document.querySelector('.recipe-input');
const addBtn = document.querySelector('.add-recipe');
const removeBtn = document.querySelector('remove-recipe');

const recipeList = document.querySelectorAll('.list-recipe');

let myMenu = [];

//create a function that holds the value from the input field and adds it to my menu;

const addRecipe = () => {
  let recipe = input.value;
  if (recipe) {
    myMenu.push(recipe);
  }

  input.value = '';
  console.log(myMenu);
};

addBtn.addEventListener('click', addRecipe);
