import { useState } from "react";
import { addToDo } from "./util/add-to-do";

interface Todo {
  id: number;
  text: string;
  done: boolean;
}

const TodoManagerApp = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTodo, setNewTodo] = useState<string>("");

  const handleNewTodo = () => {
    setTodos(addToDo(newTodo, todos));
  };

  const removeTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleTodo = (id: number) => {
    // setTodos(
    // //   todos.map((todo) =>
    // //     todo.id === id && { ...todo, done: !todo.done }
    // //   )
    // );
  };

  return (
    <div>
      <h1>Todo Manager</h1>
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />

      <button onClick={handleNewTodo}>Add</button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <input type="radio" onClick={() => toggleTodo(todo.id)}></input>
            {todo.text}
            <button onClick={() => removeTodo(todo.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};
export { TodoManagerApp };
