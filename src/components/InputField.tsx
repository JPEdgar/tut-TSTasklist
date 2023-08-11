import React, { useRef } from "react";

type InputFieldProps = {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void;
};

const InputField = ({ todo, setTodo, handleAdd }: InputFieldProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    handleAdd(e);
    inputRef.current?.blur();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodo(e.target.value);
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <input
        ref={inputRef}
        type="input"
        placeholder="Enter a task"
        value={todo}
        onChange={(e) => handleChange(e)}
      />
      <button type="submit">Go</button>
    </form>
  );
};

export default InputField;
