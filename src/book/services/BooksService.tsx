import { Book } from "../../../../foundation/src/book/book";

const getURI = (endpoint: string) => `http://localhost:8000/${endpoint}`;

const headers = {
  "Content-Type": "application/json",
};

export interface BookService {
  findAll: () => Promise<Book[]>;
  findOne: (id: number) => Promise<Book>;
  save: (bookToSave: Book) => Promise<Book>;
}

export const useBooks = () => {
  const findAll: BookService["findAll"] = () => {
    return fetch(getURI("books")).then((response) => response.json());
  };

  const findOne: BookService["findOne"] = (id) => {
    return fetch(getURI(`books/${id}`)).then((response) => response.json());
  };

  const save: BookService["save"] = (bookToSave) => {
    return fetch(getURI(`books/${bookToSave.id}`), {
      method: "PUT",
      headers,
      body: JSON.stringify(bookToSave),
    }).then((response) => response.json());
  };

  return {
    findAll,
    findOne,
    save,
  };
};
