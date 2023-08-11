import React from "react";

import TodoCard from "./TodoCard";

import { Todo } from "../model";

type TodoListProps = {
  todoList: Todo[];
  setTodoList: React.Dispatch<React.SetStateAction<Todo[]>>;
};

const TodoList = ({ todoList, setTodoList }: TodoListProps) => {
  return (
    <div>
      {todoList.map((todo) => (
        <TodoCard key={todo.id} todo={todo} setTodoList={setTodoList} />
      ))}
    </div>
  );
};

export default TodoList;
