import { renderToDoList, addTask, clearCompleted } from './modules/listUtils.js';
import { updateLocalStorage, getLocalStorage } from './modules/localStorage.js';
import './styles/style.css';

const input = document.querySelector('.task-input');
const todoList = document.querySelector('.todo-list-ul');
const clearCompletedBtn = document.querySelector('.todo-list-clear-btn');

let toDoTasks = getLocalStorage();

renderToDoList(toDoTasks);

input.addEventListener('keypress', (e) => {
  if (e.key === 'Enter' && input.value !== '') {
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
    const taskIndex = toDoTasks.findIndex((task) => task.task === clickedTask.value);
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

todoList.addEventListener('dblclick', (e) => {
  if (e.target.closest('.todo-list-li-text')) {
    const clickedTask = e.target.closest('.todo-list-li-text');
    clickedTask.disabled = false;
    clickedTask.focus();
    const taskText = clickedTask.value;

    clickedTask.addEventListener('keypress', (e) => {
      if (e.key === 'Enter' && clickedTask.value !== '') {
        const taskIndex = toDoTasks.findIndex((task) => task.task === taskText);
        toDoTasks[taskIndex].task = clickedTask.value;
        clickedTask.disabled = true;
        updateLocalStorage(toDoTasks);
        renderToDoList(toDoTasks);
      }
    });
  }
});

todoList.addEventListener('click', (e) => {
  if (e.target.closest('.todo-list-li-cross')) {
    const clickedCross = e.target.closest('.todo-list-li-cross');
    const clickedTask = clickedCross.previousElementSibling;
    const taskIndex = toDoTasks.findIndex((task) => task.task === clickedTask.value);
    toDoTasks.splice(taskIndex, 1);
    toDoTasks.forEach((task, index) => {
      task.id = index + 1;
    });
    updateLocalStorage(toDoTasks);
    renderToDoList(toDoTasks);
  }
});