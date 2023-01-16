import renderToDoList from './modules/renderToDoList.js';
import './styles/style.css';


const toDoTasks = [
  { id: 1, task: 'Learn HTML', completed: true },
  { id: 2, task: 'Learn JavaScript', completed: true },
  { id: 3, task: 'Learn React', completed: false },
];

renderToDoList(toDoTasks);