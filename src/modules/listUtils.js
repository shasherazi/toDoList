import { getLocalStorage } from './localStorage.js';

const toDoList = document.querySelector('.todo-list-ul');

export const renderToDoList = (toDoListArray) => {
  toDoList.innerHTML = '';

  toDoListArray = getLocalStorage(toDoListArray);

  toDoListArray.forEach((toDo) => {
    const toDoItem = document.createElement('li');
    toDoItem.classList.add('todo-list-li');
    toDoItem.innerHTML = `
    <input type="checkbox" class="todo-list-li-checkbox" ${toDo.completed ? 'checked' : ''}>
        <span class="todo-list-li-task">${toDo.task}</span>
        `;
    toDoList.appendChild(toDoItem);
  });
};

export const addTask = (toDoListArray, task) => {
  toDoListArray.push({ task, completed: false, id: toDoListArray.length + 1 });
};

export const clearCompleted = (toDoListArray) => {
  toDoListArray = toDoListArray.filter((task) => task.completed === false);
  toDoListArray.forEach((task, index) => {
    task.id = index + 1;
  });
  return toDoListArray;
};