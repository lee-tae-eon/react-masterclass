import React, { useState } from "react";
import { useForm } from "react-hook-form";

// function ToDoList() {
//   const [toDo, setTodo] = useState("");
//   const onChange = (event: React.FormEvent<HTMLInputElement>) => {
//     const {
//       currentTarget: { value },
//     } = event;
//     if (toDo.length < 10) {

//     }
//   };

//   const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault();
//     console.log(toDo);
//   };

//   return (
//     <div>
//       <form onSubmit={onSubmit}>
//         <input onChange={onChange} value={toDo} placeholder="Write a to do" />
//         <button>Add</button>
//       </form>
//     </div>
//   );
// }
interface TodoFormProps {
  toDo: string;
}

const ToDoList = () => {
  const { register, getValues, watch, handleSubmit } = useForm<TodoFormProps>({
    mode: "onChange",
  });

  const { toDo } = watch();

  const onValid = (data: any) => {
    console.log(data);
  };

  console.log(toDo);

  return (
    <div>
      <form onSubmit={handleSubmit(onValid)}>
        <input {...register("toDo")} placeholder="Write a to do" />
        <button>Add</button>
      </form>
    </div>
  );
};

export default ToDoList;
