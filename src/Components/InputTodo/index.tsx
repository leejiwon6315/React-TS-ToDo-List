import { useRef } from "react";
import style from "./InputTodo.module.scss";

const InputTodo: React.FC = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const addTodoData = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
  };

  return (
    <form className={style.todo_input_wrapper}>
      <input className={style.todo_input} type="text" ref={inputRef} />
      <button
        className={style.todo_input_button}
        type="submit"
        onClick={addTodoData}
      >
        추가
      </button>
    </form>
  );
};

export default InputTodo;
