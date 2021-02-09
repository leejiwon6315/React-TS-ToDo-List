import React from "react";

interface Todo {
  id: number;
  schedule: string;
}

interface TodoListInterface {
  todos: Array<Todo>;
  loading: boolean;
}

const defaultTodoList: TodoListInterface = {
  todos: [],
  loading: false,
};

export const TodoContext = React.createContext<TodoListInterface>(
  defaultTodoList
);

const Store: React.FC = (props) => {
  return <>{props.children}</>;
};

export default Store;
