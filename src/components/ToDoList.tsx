import { useRecoilValue } from "recoil";
import { toDoSelector, toDoState } from "../atoms";
import CreateToDo from "./CreateToDo";
import ToDo from "./ToDo";

function ToDoList() {
  const [toDos, doing, done] = useRecoilValue(toDoSelector);

  return (
    <div>
      <h1>To dos</h1>
      <hr />
      <CreateToDo />
      <h2>TO DO</h2>
      <hr />
      <ul>
        {toDos.map((todo) => (
          <ToDo key={todo.id} {...todo} />
        ))}
      </ul>
      <br />
      <h2>DOING</h2>
      <hr />
      <ul>
        {doing.map((todo) => (
          <ToDo key={todo.id} {...todo} />
        ))}
      </ul>
      <br />
      <h2>DONE</h2>
      <hr />
      <ul>
        {done.map((todo) => (
          <ToDo key={todo.id} {...todo} />
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;
