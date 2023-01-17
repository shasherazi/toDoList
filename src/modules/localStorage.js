export const updateLocalStorage = (toDoListArray) => {
  localStorage.setItem('toDoList', JSON.stringify(toDoListArray));
};

export const getLocalStorage = (toDoListArray) => {
  const localStorageData = JSON.parse(localStorage.getItem('toDoList'));
  if (localStorageData) {
    toDoListArray = localStorageData;
  } else {
    toDoListArray = [];
  }
  return toDoListArray;
};
