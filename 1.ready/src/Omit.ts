interface Todo {
  title: string;
  completed: boolean;
  description: string;
}

type Pick<T, K extends keyof T> = {
  [P in K]: T[P];
};

type Exclude<T, U> = T extends U ? never : T;

type Omit<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>;

type todoPreview = Omit<Todo, "description">;

type RTodo = Readonly<Todo>;

export {};
