import style from "./TodoList.module.scss";
import TodoItem from "./TodoItem";

const TodoList: React.FC = () => {
  const todos = [
    { id: 1, schedule: "공부하기" },
    { id: 2, schedule: "밥먹기" },
  ];
  return (
    <ul className={style.list_wrapper}>
      {todos.map((elem) => (
        <TodoItem todo={elem} key={elem.id} />
      ))}
    </ul>
  );
};

export default TodoList;
