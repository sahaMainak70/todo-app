import React, { useState } from "react";

export const TodoList = ({ todo, deleteTodo }) => {

  return (
    <div key={todo.id} className="todo-item">
      <div
        className="todo"
        onClick={() => {
          todo.completed = !todo.completed;
          let checkbox = document.getElementById(todo.id);
          if (todo.completed && !checkbox.checked) checkbox.checked = true;
          else checkbox.checked = false;
          console.log(todo.completed);
        }}
      >
        <input
          type="checkbox"
          id={todo.id}
          onClick={() => {
            todo.completed = !todo.completed;
          }}
        />
        <label for={todo.id}></label>
        <p>{todo.task}</p>
      </div>
      <button type="button" onClick={() => deleteTodo(todo.id)}>
        <i className="fa-solid fa-trash"></i>
      </button>
    </div>
  );
};
