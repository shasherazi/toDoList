import { updateLocalStorage, getLocalStorage } from './localStorage.js';

const toDoList = document.querySelector('.todo-list-ul');

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

export const renderToDoList = (toDoListArray) => {
  toDoList.innerHTML = '';

  toDoListArray = getLocalStorage();

  toDoListArray.forEach((toDo) => {
    const toDoItem = document.createElement('li');
    toDoItem.classList.add('todo-list-li');

    const toDoCheckbox = document.createElement('input');
    toDoCheckbox.classList.add('todo-list-li-checkbox');
    toDoCheckbox.type = 'checkbox';
    toDoCheckbox.checked = toDo.completed;
    toDoItem.appendChild(toDoCheckbox);

    const toDoText = document.createElement('input');
    toDoText.classList.add('todo-list-li-text');
    toDoText.value = toDo.task;
    toDoText.disabled = true;
    toDoItem.appendChild(toDoText);

    if (toDo.completed) {
      toDoText.classList.add('completed');
    }

    const crossIcon = document.createElement('span');
    crossIcon.classList.add('todo-list-li-cross');
    crossIcon.innerHTML = 'x';
    toDoItem.appendChild(crossIcon);

    toDoList.appendChild(toDoItem);
  });
};

export const editTask = (e, toDoListArray) => {
  const clickedTask = e.target.closest('.todo-list-li-text');
  clickedTask.disabled = false;
  clickedTask.focus();
  const taskText = clickedTask.value;

  clickedTask.addEventListener('keypress', (e) => {
    if (e.key === 'Enter' && clickedTask.value !== '') {
      const taskIndex = toDoListArray.findIndex((task) => task.task === taskText);
      toDoListArray[taskIndex].task = clickedTask.value;
      clickedTask.disabled = true;
      updateLocalStorage(toDoListArray);
      renderToDoList(toDoListArray);
    }
  });
};

export const deleteTask = (e, toDoListArray) => {
  const clickedCross = e.target.closest('.todo-list-li-cross');
  const clickedTask = clickedCross.previousElementSibling;
  const taskIndex = toDoListArray.findIndex((task) => task.task === clickedTask.value);
  toDoListArray.splice(taskIndex, 1);
  toDoListArray.forEach((task, index) => {
    task.id = index + 1;
  });
  updateLocalStorage(toDoListArray);
  renderToDoList(toDoListArray);
};

export const markTask = (e, toDoListArray) => {
  const clickedCheckbox = e.target.closest('.todo-list-li-checkbox');
  const clickedTask = clickedCheckbox.nextElementSibling;
  const taskIndex = toDoListArray.findIndex((task) => task.task === clickedTask.value);
  toDoListArray[taskIndex].completed = !toDoListArray[taskIndex].completed;
  updateLocalStorage(toDoListArray);
  renderToDoList(toDoListArray);
};
