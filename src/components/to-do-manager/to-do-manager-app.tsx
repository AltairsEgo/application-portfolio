import { useRef, useState } from "react";
import { addToDo } from "./util/add-to-do";
import styles from "./to-do-manager.module.css";
import { Todo } from "./types";
import { markDone } from "./util/mark-done";
import { removeToDo } from "./util/remove-to-do";
import { ToDoManager, ToDo } from "./todo-class/to-do-manager-class";

const TodoManagerApp = () => {
  const toDoManager = new ToDoManager();

  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div className={styles.todoManagerApp}>
      <h1>Todo Manager</h1>
      <div className={styles.todoInput}>
        <input type="text" ref={inputRef} />

        <button
          onClick={() => {
            toDoManager.add(new ToDo(inputRef.current?.value || "", false));
            inputRef.current!.value = "";
          }}
        >
          Add
        </button>
      </div>
      <ul>
        {toDoManager.getTodos().map((todo) => (
          <li key={todo.getId()} className={styles.todoItemList}>
            <span className={todo.isDone() ? styles.markedDone : ""}>
              {todo.getTitle()}
            </span>
            <button onClick={() => toDoManager.remove}>Remove</button>
            <button onClick={() => todo.markDone}>Mark done</button>
          </li>
        ))}
      </ul>
    </div>
  );
};
export { TodoManagerApp };
