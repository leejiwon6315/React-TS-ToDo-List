import style from "./TodoHeader.module.scss";
import { useTodoState } from "../../TodosContext";

const TodoHeader: React.FC = () => {
  const todo = useTodoState();
  return (
    <div className={style.todo_header_wrapper}>
      <h1 className={style.todo_title}>To-Do List</h1>
      <div className={style.todo_count}>{todo.length} Tasks</div>
    </div>
  );
};

export default TodoHeader;
