import { useRef } from "react";

const InputTodo: React.FC = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const addTodoData = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (inputRef && inputRef.current) {
    }
  };

  return (
    <form>
      <input type="text" ref={inputRef} />
      <button type="submit" onClick={addTodoData}>
        추가
      </button>
    </form>
  );
};

export default InputTodo;
