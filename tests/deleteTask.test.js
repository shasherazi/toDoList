import { deleteTask } from '../src/modules/listUtils.js';

describe('deleting tasks', () => {
  test('deleteTask', () => {
    const toDOTasks = [
      { task: 'task', completed: false, id: 1 },
    ];
    const task = { task: 'task', completed: false, id: 1 };

    deleteTask(toDOTasks, task);

    expect(toDOTasks).toEqual([]);
  });
});