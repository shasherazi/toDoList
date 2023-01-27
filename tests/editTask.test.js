import { editTask } from '../src/modules/listUtils.js';

describe('editTask', () => {
  const toDoListArray = [
    { task: 'task1', completed: false, id: 1 },
    { task: 'task2', completed: false, id: 2 },
    { task: 'task3', completed: false, id: 3 },
  ];

  test('should edit a task', () => {
    const taskToEdit = 'task2';
    const task = 'task2 edited';

    editTask(toDoListArray, taskToEdit, task);

    expect(toDoListArray[1].task).toBe(task);
  });
});