import { todolist, input, forms } from './delete.js';

const addBook = () => {
  const task = {
    description: input.value,
    completed: false,
  };
  todolist.push(task);
  // forms.appendChild(todolist);
  localStorage.setItem('list', JSON.stringify(todolist));
  input.value = '';
  window.location.reload();
  // populate();
};

export default addBook;