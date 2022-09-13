type Pick<T, K extends keyof T> = {
  [P in K]: T[P];
};

interface Book {
  book_name: string;
  book_price: string;
  book_address: string;
}

type picktype = Pick<Book, "book_name" | "book_address">;

export {};
