import React, { useState, useEffect } from "react";
import { TodoMaker } from "./TodoMaker";
import { TodoList } from "./TodoList";

export const TodoDiv = () => {
  const [todos, setTodos] = useState(() => {
    const todos = localStorage.getItem("todos");
    return todos ? JSON.parse(todos) : [];
  });

  const addTodo = (todo) => {
    setTodos([
      ...todos,
      { id: todos.length + 1, task: todo, completed: false },
    ]);
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="todo-div">
      <h1>Todo List</h1>
      <TodoMaker addTodo={addTodo} />
      <div className="todo-list">
        {todos.map((todo) => (
          <TodoList key={todo.id} todo={todo} deleteTodo={deleteTodo} />
        ))}
      </div>
    </div>
  );
};
