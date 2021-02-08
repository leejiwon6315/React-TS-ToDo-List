import style from "./TodoHeader.module.scss";
const TodoHeader = () => {
  return (
    <div className={style.todo_header_wrapper}>
      <h1 className={style.todo_title}>To-Do List</h1>
      <div className={style.todo_count}>0</div>
    </div>
  );
};

export default TodoHeader;
