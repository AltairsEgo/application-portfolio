interface Todo {
  id: number;
  text: string;
  done: boolean;
}

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
