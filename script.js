const input = document.querySelector('.recipe-input');
const addBtn = document.querySelector('.add-recipe');
const removeBtn = document.querySelector('remove-recipe');

const recipeContainer = document.querySelector('.recipe-list');

const populateUX = () => {
  if (localStorage.getItem('recipe')) {
    const datas = JSON.parse(localStorage.getItem('recipe'));
    datas.forEach((data) => {
      //createElement function;
      const pEle = document.createElement('p');
      const remove = document.createElement('button');
      pEle.textContent = data;
      remove.textContent = 'remove';
      recipeContainer.appendChild(pEle);
      recipeContainer.appendChild(remove);
    });
  }
};

populateUX();

const addRecipe = () => {
  //check for an array if present add; push a new value to the array; get it  a back , parse and push  the new value to it;

  let Menu = localStorage.getItem('recipe')
    ? JSON.parse(localStorage.getItem('recipe'))
    : [];

  const recipeInput = input.value;
  Menu.push(recipeInput);
  localStorage.setItem('recipe', JSON.stringify(Menu));
  const pEle = document.createElement('p');
  pEle.textContent = recipeInput;
  recipeContainer.appendChild(pEle);
  const remove = document.createElement('button');
  remove.textContent = 'remove';
  recipeContainer.appendChild(remove);
  input.value = '';
};

addBtn.addEventListener('click', addRecipe);

const appendElement = () => {};
