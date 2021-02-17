import React, { useCallback } from "react";
import { useTodoDispatch, Todo } from "../../TodosContext";
import style from "./TodoList.module.scss";

interface Props {
  todo: Todo;
}

const TodoItem: React.FC<Props> = ({ todo }) => {
  const dispatch = useTodoDispatch();

  const onRemoveItem = useCallback(() => {
    dispatch({
      type: "REMOVE",
      id: todo.id,
    });
  }, []);

  const onToggle = useCallback(() => {
    dispatch({ type: "TOGGLE", id: todo.id });
  }, []);

  return (
    <li className={style.list}>
      <input type="checkbox" onClick={onToggle} />
      <p className={style.todo}>{todo.schedule}</p>
      <p className={style.delete_todo} onClick={onRemoveItem}>
        ×
      </p>
    </li>
  );
};

export default React.memo(TodoItem);
