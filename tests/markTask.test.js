import { markTask } from '../src/modules/listUtils.js';

describe('markTask', () => {
  const toDoListArray = [
    { id: 1, task: 'task1', completed: false },
    { id: 2, task: 'task2', completed: true },
    { id: 3, task: 'task3', completed: false },
  ];

  test('should mark a task as completed', () => {
    markTask(toDoListArray, 'task1');
    expect(toDoListArray[0].completed).toBe(true);
  });

  test('should mark a task as not completed', () => {
    markTask(toDoListArray, 'task2');
    expect(toDoListArray[1].completed).toBe(false);
  });
});