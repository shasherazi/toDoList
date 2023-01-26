import { addTask } from '../src/modules/listUtils.js';

describe('adding tasks', () => {
  let toDoTasks = [];

  beforeEach(() => {
    toDoTasks = [];
  });

  test('add one task', () => {
    const task = { task: 'task', completed: false, id: 1 };

    addTask(toDoTasks, 'task');

    expect(toDoTasks).toEqual([task]);
  });

  test('add two tasks', () => {
    const task1 = { task: 'task1', completed: false, id: 1 };
    const task2 = { task: 'task2', completed: false, id: 2 };

    addTask(toDoTasks, 'task1');
    addTask(toDoTasks, 'task2');

    expect(toDoTasks).toEqual([task1, task2]);
  });
});