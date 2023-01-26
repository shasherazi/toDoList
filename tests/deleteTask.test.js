import { deleteTask } from '../src/modules/listUtils.js';

describe('deleting tasks', () => {
  test('deleteTask', () => {
    const toDOTasks = [
      {
        task: 'task',
        completed: false,
        id: 1,
      },
    ];
    const task = {
      task: 'task',
      completed: false,
      id: 1,
    };

    deleteTask(toDOTasks, task);

    expect(toDOTasks).toEqual([]);
  });

  test('deleting middle task', () => {
    const toDoTasks = [
      {
        task: 'task1',
        completed: false,
        id: 1,
      },
      {
        task: 'task2',
        completed: false,
        id: 2,
      },
      {
        task: 'task3',
        completed: false,
        id: 3,
      },
    ];

    const task = {
      task: 'task2',
      completed: true,
      id: 2,
    };

    deleteTask(toDoTasks, task);

    expect(toDoTasks).toEqual([
      {
        task: 'task1',
        completed: false,
        id: 1,
      },

      {
        task: 'task3',
        completed: false,
        id: 2,
      },
    ]);
  });
});