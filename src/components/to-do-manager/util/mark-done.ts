import { Todo } from "../types";

const markDone = (id: number, todos: Todo[]) => {
  const newToDoList = todos.map((todo) =>
    todo.id === id ? { ...todo, done: !todo.done } : todo
  );

  return newToDoList;
};

export { markDone };
