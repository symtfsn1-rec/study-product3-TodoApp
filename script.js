const savedTodos = localStorage.getItem('myTodos');
let todos = savedTodos ? JSON.parse(savedTodos) : [];
let currentFilter = 'all';

const todoInput = document.getElementById('todoInput');
const addBtn = document.getElementById('addBtn');
const todoList = document.getElementById('todoList');
const filterBtns = document.querySelectorAll('#filters button');

const saveToLocalStorage = () => localStorage.setItem('myTodos', JSON.stringify(todos));


addBtn.addEventListener('click', () => {
  const text = todoInput.value.trim();
  if (text === '') return;

  const newTodo = {
    id: Date.now(),
    text: text,
    completed: false
  };

  todos.push(newTodo);
  saveToLocalStorage();
  todoInput.value = '';

  renderTodos();
});

const renderTodos = () => {
  todoList.innerHTML = '';

  const filteredTodos = todos.filter((todo) => {
    if (currentFilter === 'active') return !todo.completed;
    if (currentFilter === 'completed') return todo.completed;
    return true;
  });

  filteredTodos.forEach((todo) => {
    const li = document.createElement('li');

    li.textContent = todo.text;
    li.dataset.id = todo.id;

    if (todo.completed) {
      li.classList.add('completed');
    }

    todoList.appendChild(li);
  });

}

todoList.addEventListener('click', (e) => {
  const clickedId = Number(e.target.dataset.id);

  todos = todos.map((todo) => {
    if (todo.id === clickedId) {
      return {...todo, completed: !todo.completed};
    }
    return todo;
  });

  saveToLocalStorage();
  renderTodos();
});

const filtersContainer = document.getElementById('filters');

filtersContainer.addEventListener('click', (e) => {
  if (e.target.tagName !== 'BUTTON') return;

  currentFilter = e.target.dataset.filter;

  filterBtns.forEach(btn => btn.classList.remove('active-filter'));
  e.target.classList.add('active-filter');

  renderTodos();
});

renderTodos();