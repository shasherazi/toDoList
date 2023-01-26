import { updateLocalStorage } from '../src/modules/localStorage.js';
import { addTask, deleteTask } from '../src/modules/listUtils.js';

describe('updateLocalStorage', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  test('check localStorage', () => {
    const toDoTasks = [{ description: 'task1', completed: false, index: 1 }];

    updateLocalStorage(toDoTasks);

    expect(localStorage.getItem('toDoList')).toBe(JSON.stringify(toDoTasks));
  });

  test('check localStorage with addition', () => {
    const toDoTasks = [];
    const newTask = { description: 'task1', completed: false, index: 1 };

    addTask(toDoTasks, newTask);
    updateLocalStorage(toDoTasks);

    expect(localStorage.getItem('toDoList')).toBe(JSON.stringify(toDoTasks));
  });

  test('check localStorage with addition and deletion', () => {
    const toDoTasks = [];
    const newTask = { description: 'task1', completed: false, index: 1 };

    addTask(toDoTasks, newTask);
    deleteTask(toDoTasks, 1);
    updateLocalStorage(toDoTasks);

    expect(localStorage.getItem('toDoList')).toBe(JSON.stringify(toDoTasks));
  });
});