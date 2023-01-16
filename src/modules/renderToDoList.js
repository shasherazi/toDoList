const toDoList = document.querySelector('.todo-list-ul');

const renderToDoList = (toDoListArray) => {
  toDoList.innerHTML = '';

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

export default renderToDoList;