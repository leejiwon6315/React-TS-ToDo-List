import style from "./TodoList.module.scss";
const TodoList: React.FC = () => {
  return (
    <ul className={style.list_wrapper}>
      <li className={style.list}>
        <p className={style.todo}>todo</p>
        <p className={style.delete_todo}>×</p>
      </li>
    </ul>
  );
};

export default TodoList;
