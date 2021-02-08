import React from "react";
import InputTodo from "./Components/InputTodo";
import TodoList from "./Components/TodoList";

const App: React.FC = () => {
  return (
    <>
      <InputTodo />
      <TodoList />
    </>
  );
};

export default App;
