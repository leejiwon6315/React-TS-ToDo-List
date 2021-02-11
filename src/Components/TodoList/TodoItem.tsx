import { useTodoDispatch, Todo } from "../../TodosContext";
import style from "./TodoList.module.scss";

interface TodoItemProps {
  todo: Todo;
}

const TodoItem = ({ todo }: TodoItemProps) => {
  const dispatch = useTodoDispatch();

  const removeItem = () => {
    dispatch({
      type: "REMOVE",
      id: todo.id,
    });
  };

  return (
    <li className={style.list}>
      <p className={style.todo}>
        {todo.id + 1}. {todo.schedule}
      </p>
      <p className={style.delete_todo} onClick={removeItem}>
        ×
      </p>
    </li>
  );
};

export default TodoItem;
