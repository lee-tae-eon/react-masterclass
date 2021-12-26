import { useForm } from "react-hook-form";

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
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        marginTop: "50px",
      }}
    >
      <form onSubmit={handleSubmit(onValid)}>
        <input {...register("toDo")} placeholder="Write a to do" />
        <button>Add</button>
      </form>
    </div>
  );
};

export default ToDoList;
