import { atom, selector } from "recoil";

interface ToDoStateInterface {
  [key: string]: string[];
}

export const toDoState = atom<ToDoStateInterface>({
  key: "toDo",
  default: {
    to_do: ["a", "b", "c", "d", "e", "f"],
    doing: [],
    done: [],
  },
});
