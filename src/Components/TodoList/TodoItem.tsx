import style from "./TodoList.module.scss";

interface TodoItemProps {
  todo: {
    id: number;
    schedule: string;
  };
}

const TodoItem = ({ todo }: TodoItemProps) => {
  return (
    <li className={style.list}>
      <p className={style.todo}>{todo.schedule}</p>
      <p className={style.delete_todo}>×</p>
    </li>
  );
};

export default TodoItem;
