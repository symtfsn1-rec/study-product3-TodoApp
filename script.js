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

const renderTodos = () => {
  todoList.innerHTML = '';

  todos.forEach((todo) => {
    const li = document.createElement('li');

    li.textContent = todo.text;

    if (todo.completed) {
      li.classList.add('completed');
    }

    todoList.appendChild(li);
  });

}