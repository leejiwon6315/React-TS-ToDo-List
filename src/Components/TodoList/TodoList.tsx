import React from "react";
import style from "./TodoList.module.scss";
import TodoItem from "./TodoItem";
import { useTodoState } from "../../TodosContext";

const TodoList: React.FC = () => {
  const todos = useTodoState();
  return (
    <ul className={style.list_wrapper}>
      {todos.map((elem) => (
        <TodoItem todo={elem} key={elem.id} />
      ))}
    </ul>
  );
};

export default React.memo(TodoList);
