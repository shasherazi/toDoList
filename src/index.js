import { renderToDoList, addTask, clearCompleted } from './modules/listUtils.js';
import { updateLocalStorage } from './modules/localStorage.js';
import './styles/style.css';

const input = document.querySelector('.task-input');
const todoList = document.querySelector('.todo-list-ul');
const clearCompletedBtn = document.querySelector('.todo-list-clear-btn');

let toDoTasks = [];

renderToDoList(toDoTasks);

input.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    addTask(toDoTasks, input.value);
    input.value = '';
    updateLocalStorage(toDoTasks);
    renderToDoList(toDoTasks);
  }
});

todoList.addEventListener('click', (e) => {
  if (e.target.closest('.todo-list-li-checkbox')) {
    const clickedCheckbox = e.target.closest('.todo-list-li-checkbox');
    const clickedTask = clickedCheckbox.nextElementSibling;
    const taskIndex = toDoTasks.findIndex((task) => task.task === clickedTask.textContent);
    toDoTasks[taskIndex].completed = !toDoTasks[taskIndex].completed;
    updateLocalStorage(toDoTasks);
    renderToDoList(toDoTasks);
  }
});

clearCompletedBtn.addEventListener('click', () => {
  toDoTasks = clearCompleted(toDoTasks);
  updateLocalStorage(toDoTasks);
  renderToDoList(toDoTasks);
});