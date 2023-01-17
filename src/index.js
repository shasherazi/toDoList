import {
  markTask,
  deleteTask,
  editTask,
  clearCompleted,
  addTask,
  renderToDoList,
} from './modules/listUtils.js';
import { updateLocalStorage, getLocalStorage } from './modules/localStorage.js';
import './styles/style.css';

const input = document.querySelector('.task-input');
const todoList = document.querySelector('.todo-list-ul');
const clearCompletedBtn = document.querySelector('.todo-list-clear-btn');
const addTaskBtn = document.querySelector('.task-add-btn');

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

addTaskBtn.addEventListener('click', () => {
  if (input.value !== '') {
    addTask(toDoTasks, input.value);
    input.value = '';
    updateLocalStorage(toDoTasks);
    renderToDoList(toDoTasks);
  }
});

todoList.addEventListener('click', (e) => {
  if (e.target.closest('.todo-list-li-checkbox')) {
    markTask(e, toDoTasks);
  }
});

clearCompletedBtn.addEventListener('click', () => {
  toDoTasks = clearCompleted(toDoTasks);
  updateLocalStorage(toDoTasks);
  renderToDoList(toDoTasks);
});

todoList.addEventListener('dblclick', (e) => {
  if (e.target.closest('.todo-list-li-text')) {
    editTask(e, toDoTasks);
  }
});

todoList.addEventListener('click', (e) => {
  if (e.target.closest('.todo-list-li-cross')) {
    deleteTask(e, toDoTasks);
  }
});