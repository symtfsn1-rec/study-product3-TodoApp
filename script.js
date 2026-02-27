let todos =[];

const todoInput = document.getElementById('todoInput');
const addBtn = document.getElementById('addBtn');
const todoList = document.getElementById('todoList');
const filterBtns = document.querySelectorAll('#filters button');

addBtn.addEventListener('click', () => {
  const text = todoInput.value.trim();
  if (text === '') return;

  const newTodo = {
    id: Date.now(),
    text: text,
    completed: false
  };

  todos.push(newTodo);

  renderTodos();
});