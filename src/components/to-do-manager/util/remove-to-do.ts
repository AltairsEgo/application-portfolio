import { Todo } from "../types";

const removeToDo = (toDoList: Todo[], toDoId: number): Todo[] => {
  return toDoList.filter((toDo) => toDo.id !== toDoId);
};

export { removeToDo };
