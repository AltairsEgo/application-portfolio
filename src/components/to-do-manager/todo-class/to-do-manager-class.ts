class ToDo {
  private title: string = "";
  private id: number = 0;
  private done: boolean = false;

  constructor(title: string, done: boolean) {
    this.title = title;
    this.id = Date.now();
    this.done = done;
  }

  getTitle() {
    return this.title;
  }

  setTitle(title: string) {
    this.title = title;
  }

  getId() {
    return this.id;
  }

  markDone() {
    this.done = true;
  }

  isDone() {
    return this.done;
  }
}

class ToDoManager {
  private todos: ToDo[] = [];

  constructor(todos?: []) {
    this.todos = todos || [];
  }

  add(todo: ToDo) {
    this.todos.push(todo);
    console.log(this.todos);
  }

  remove(todo: ToDo) {
    this.todos = this.todos.filter((t) => t !== todo);
  }

  getTodos() {
    return this.todos;
  }
}

const todoManager = new ToDoManager();

todoManager.add(new ToDo("Buy milk", false));

export { ToDoManager, ToDo };
