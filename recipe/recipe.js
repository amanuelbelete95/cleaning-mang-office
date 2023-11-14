const recipeForm = document.querySelector('.recipe-form');
const recipeList = document.querySelector('.recipe-list');

const recipeInput = document.querySelector('.recipe-input');

recipeForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const li = document.createElement('li');
  const span = document.createElement('span');
  span.innerHTML = recipeInput.value;
  const remove = document.createElement('button');
  remove.innerHTML = 'remove';
  const edit = document.createElement('button');
  edit.innerHTML = 'edit';
  li.appendChild(span);
  li.appendChild(edit);
  li.appendChild(remove);
  recipeList.appendChild(li);
  recipeInput.value = '';
});

//remove
recipeList.addEventListener('click', (e) => {
  if (e.target.tagName === 'BUTTON') {
    const button = e.target;

    const li = button.parentNode;

    const ul = li.parentNode;

    if (button.textContent === 'remove') {
      ul.removeChild(li);
    } else if (button.textContent === 'edit') {
      const span = li.firstElementChild;
      const input = document.createElement('input');
      input.type = 'text';
      input.value = span.textContent;
      li.insertBefore(input, span);
      li.removeChild(span);
      button.textContent = 'save';
    } else if (button.textContent === 'save') {
      const input = li.firstElementChild;
      const span = document.createElement('span');
      span.textContent = input.value;
      li.insertBefore(span, input);
      li.removeChild(input);
    }
  }
});
