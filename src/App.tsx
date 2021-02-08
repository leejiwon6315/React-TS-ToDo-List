import React from "react";
import TodoHeader from "./Components/TodoHeader";
import InputTodo from "./Components/InputTodo";
import TodoList from "./Components/TodoList";
import style from "./App.module.scss";

const App: React.FC = () => {
  return (
    <div className={style.todo_app_wrapper}>
      <TodoHeader />
      <InputTodo />
      <TodoList />
    </div>
  );
};

export default App;
