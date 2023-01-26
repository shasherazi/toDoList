import {
  renderToDoList,
  addTask,
  clearCompleted,
  editTask,
  deleteTask,
  markTask,
} from './listUtils.js';
import { updateLocalStorage } from './localStorage.js';
import toDoTasks from '../toDoTasks.js';

const input = document.querySelector('.task-input');
const todoList = document.querySelector('.todo-list-ul');
const clearCompletedBtn = document.querySelector('.todo-list-clear-btn');
const addTaskBtn = document.querySelector('.task-add-btn');

input.addEventListener('keypress', (e) => {
  if (e.key === 'Enter' && input.value !== '') {
    addTask(toDoTasks, input.value);
    input.value = '';
    updateLocalStorage(toDoTasks);
    renderToDoList(toDoTasks, todoList);
  }
});

addTaskBtn.addEventListener('click', () => {
  if (input.value !== '') {
    addTask(toDoTasks, input.value);
    input.value = '';
    updateLocalStorage(toDoTasks);
    renderToDoList(toDoTasks, todoList);
  }
});

todoList.addEventListener('click', (e) => {
  if (e.target.closest('.todo-list-li-checkbox')) {
    markTask(e, toDoTasks);
  }
});

clearCompletedBtn.addEventListener('click', () => {
  const toDoList = clearCompleted(toDoTasks);
  updateLocalStorage(toDoList);
  renderToDoList(toDoList, todoList);
});

todoList.addEventListener('dblclick', (e) => {
  if (e.target.closest('.todo-list-li-text')) {
    editTask(e, toDoTasks);
  }
});

todoList.addEventListener('click', (e) => {
  if (e.target.closest('.todo-list-li-cross')) {
    const clickedCross = e.target.closest('.todo-list-li-cross');
    const clickedTask = clickedCross.previousElementSibling.value;
    deleteTask(toDoTasks, clickedTask);
    updateLocalStorage(toDoTasks);
    renderToDoList(toDoTasks, todoList);
  }
});