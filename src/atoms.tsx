import { atom } from "recoil";

export interface IToDo {
  id: number;
  text: string;
}

interface ToDoStateInterface {
  [key: string]: IToDo[];
}

export const toDoState = atom<ToDoStateInterface>({
  key: "toDo",
  default: {
    "To Do": [],
    Doing: [],
    Done: [],
  },
});
