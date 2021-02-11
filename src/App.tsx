import React from "react";
import TodoHeader from "./Components/TodoHeader";
import InputTodo from "./Components/InputTodo";
import TodoList from "./Components/TodoList";
import { TodoContextProvider } from "./TodosContext";
import style from "./App.module.scss";

const App: React.FC = () => {
  return (
    <TodoContextProvider>
      <div className={style.todo_app_wrapper}>
        <TodoHeader />
        <InputTodo />
        <TodoList />
      </div>
    </TodoContextProvider>
  );
};

export default App;
