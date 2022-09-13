interface Todo {
  title: string;
  completed: boolean;
  description: string;
}

type todoRecordType = Record<string, Todo>;

type todoPickType = Pick<Todo, "title" | "completed">;

type todoPickRecordType = Record<string, todoPickType>;

const todoList: Todo[] = [
  { title: "study", completed: true, description: "happy study" },
];

const todoList2: todoPickType[] = [{ title: "study", completed: true }];

const todoRecord: todoRecordType = {};
const todoPickRecord: todoPickRecordType = {};

todoList.forEach((todo) => {
  todoRecord[todo.title] = todo;
});

todoList2.forEach((todo) => {
  todoPickRecord[todo.title] = todo;
});

console.info(todoRecord);
console.info(todoPickRecord);
export {};
