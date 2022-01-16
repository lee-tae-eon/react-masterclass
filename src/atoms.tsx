import { atom, selector } from "recoil";

interface ToDoStateInterface {
  [key: string]: string[];
}

export const toDoState = atom<ToDoStateInterface>({
  key: "toDo",
  default: {
    "To Do": ["a", "b", "f"],
    Doing: ["c", "d"],
    Done: ["e"],
  },
});
