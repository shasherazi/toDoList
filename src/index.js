import { renderToDoList, addTask } from './modules/listUtils.js';
import './styles/style.css';

const input = document.querySelector('.task-input');
const todoList = document.querySelector('.todo-list-ul');

const toDoTasks = [];
renderToDoList(toDoTasks);

input.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    addTask(toDoTasks, input.value);
    input.value = '';
  }
});

todoList.addEventListener('click', (e) => {
  if (e.target.closest('.todo-list-li-checkbox')) {
    const clickedCheckbox = e.target.closest('.todo-list-li-checkbox');
    const clickedTask = clickedCheckbox.nextElementSibling;
    const taskIndex = toDoTasks.findIndex((task) => task.task === clickedTask.textContent);
    toDoTasks[taskIndex].completed = !toDoTasks[taskIndex].completed;
    renderToDoList(toDoTasks);
  }
});