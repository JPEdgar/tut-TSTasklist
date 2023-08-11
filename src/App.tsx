import React, { useState } from "react";

import InputField from "./components/InputField";
import TodoList from "./components/TodoList";

import { Todo } from "./model";

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todoList, setTodoList] = useState<Todo[]>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (todo) {
      setTodoList([
        ...todoList,
        { id: Date.now(), todo: todo, isDoneFlag: false },
      ]);
      setTodo("");
    }
  };

  return (
    <div>
      <h1>Taskify</h1>
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
      <TodoList todoList={todoList} setTodoList={setTodoList}/>
    </div>
  );
};

export default App;
