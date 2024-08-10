import React, { useState } from "react";

export const TodoMaker = ({ addTodo }) => {
  const [todo, setTodo] = useState("");

  return (
    <form
      className="todo-form"
      onSubmit={(e) => {
        if (todo.trim() === "") {
          e.preventDefault();
          alert("Please enter a task");
          return;
        }
        e.preventDefault();
        addTodo(todo);
        setTodo("");
      }}
    >
      <input
        type="text"
        placeholder="Enter Your Upcoming Task"
        className="todo-input"
        value={todo}
        onChange={(e) => {
          setTodo(e.target.value);
        }}
      />
      <button type="submit" className="todo-button">
        Add
      </button>
    </form>
  );
};
