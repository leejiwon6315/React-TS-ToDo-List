import { useState } from "react";
import style from "./InputTodo.module.scss";

const InputTodo: React.FC = () => {
  const [input, setInput] = useState("");

  const onChangeInput = (e: any) => {
    setInput(e.target.value);
  };

  const addTodoData = (e: React.FormEvent) => {
    e.preventDefault();
    setInput("");
  };

  return (
    <form className={style.todo_input_wrapper} onSubmit={addTodoData}>
      <input
        className={style.todo_input}
        type="text"
        value={input}
        onChange={onChangeInput}
      />
      <button className={style.todo_input_button}>추가</button>
    </form>
  );
};

export default InputTodo;
