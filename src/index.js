import { renderToDoList } from './modules/listUtils.js';
import toDoTasks from './toDoTasks.js';
import './modules/eventListeners.js';
import './styles/style.css';

const toDoList = document.querySelector('.todo-list-ul');

renderToDoList(toDoTasks, toDoList);