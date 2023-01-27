import { getLocalStorage } from './localStorage.js';

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

export const renderToDoList = (toDoListArray, toDoListDOM) => {
  toDoListDOM.innerHTML = '';

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
    crossIcon.innerHTML = '<i class="fa-solid fa-xmark"></i>';
    toDoItem.appendChild(crossIcon);

    toDoListDOM.appendChild(toDoItem);
  });
};

export const editTask = (toDoListArray, taskToEdit, task) => {
  const taskIndex = toDoListArray.findIndex((task) => task.task === taskToEdit);
  toDoListArray[taskIndex].task = task;
};

export const deleteTask = (toDoListArray, taskObj) => {
  const taskIndex = toDoListArray.findIndex((task) => task.task === taskObj.task);
  toDoListArray.splice(taskIndex, 1);
  toDoListArray.forEach((task, index) => {
    task.id = index + 1;
  });
  return toDoListArray;
};

export const markTask = (toDoListArray, task) => {
  const taskIndex = toDoListArray.findIndex((taskObj) => taskObj.task === task);
  toDoListArray[taskIndex].completed = !toDoListArray[taskIndex].completed;
};
