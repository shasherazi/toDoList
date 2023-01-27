import { clearCompleted } from '../src/modules/listUtils.js';

describe('clearCompleted', () => {
  test('should clear all completed tasks', () => {
    const toDoListArray = [
      { id: 1, task: 'task1', completed: false },
      { id: 2, task: 'task2', completed: true },
      { id: 3, task: 'task3', completed: false },
    ];

    const toDoList = clearCompleted(toDoListArray);

    expect(toDoList).toEqual([
      { id: 1, task: 'task1', completed: false },
      { id: 2, task: 'task3', completed: false },
    ]);
  });

  test('should return an empty array if all tasks are completed', () => {
    const toDoListArray = clearCompleted([
      { id: 1, task: 'task1', completed: true },
      { id: 2, task: 'task2', completed: true },
      { id: 3, task: 'task3', completed: true },
    ]);

    const toDoList = clearCompleted(toDoListArray);

    expect(toDoList).toEqual([]);
  });
});