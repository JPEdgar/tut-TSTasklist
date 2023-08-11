import React, { useState, useRef, useEffect } from "react";

import { Todo } from "../model";

type TodoCardProps = {
  todo: Todo;
  setTodoList: React.Dispatch<React.SetStateAction<Todo[]>>;
};

const TodoCard = ({ todo, setTodoList }: TodoCardProps) => {
  const [editFlag, setEditFlag] = useState<boolean>(false);
  const [editTodo, setEditTodo] = useState<string>(todo.todo);

  const inputRef = useRef<HTMLInputElement>(null);

  const handleDone = (id: number) => {
    setTodoList((curr) =>
      curr.map((todo) =>
        todo.id === id ? { ...todo, isDoneFlag: !todo.isDoneFlag } : todo
      )
    );
  };

  const handleDelete = (id: number) => {
    setTodoList((curr) => curr.filter((todo) => todo.id !== id));
  };

  const handleEdit = () => {
    if (!editFlag && !todo.isDoneFlag) {
      setEditFlag((curr) => !curr);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditTodo(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent, id: number) => {
    e.preventDefault();
    setTodoList((curr) =>
      curr.map((todo) => (todo.id === id ? { ...todo, todo: editTodo } : todo))
    );
    setEditFlag(false);
  };

  useEffect(() => {
    inputRef.current?.focus();
  }, [editFlag]);

  return (
    <form onSubmit={(e) => handleSubmit(e, todo.id)}>
      {editFlag ? (
        <input
          ref={inputRef}
          value={editTodo}
          onChange={(e) => handleChange(e)}
        />
      ) : todo.isDoneFlag ? (
        <s>{todo.todo}</s>
      ) : (
        <span>{todo.todo}</span>
      )}
      <div>
        <span onClick={() => handleEdit()}>edit</span>
        <span onClick={() => handleDelete(todo.id)}>delete</span>
        <span onClick={() => handleDone(todo.id)}>complete</span>
      </div>
    </form>
  );
};

export default TodoCard;
