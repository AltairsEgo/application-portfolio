import { Todo } from "../types";

const addToDo = (toDo: string, toDoList: Todo[]) => {
  const newToDoList = [
    ...toDoList,
    {
      id: Date.now(),
      text: toDo,
      done: false,
    },
  ];
  return newToDoList;
};

export { addToDo };
