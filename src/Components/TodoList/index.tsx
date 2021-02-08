import style from "./TodoList.module.scss";
const TodoList: React.FC = () => {
  return (
    <ul className={style.list_wrapper}>
      <li className={style.list}>todo</li>
    </ul>
  );
};

export default TodoList;
