import { useState } from "react";
import { TodoItem } from "./TodoItem";

export function TodoList({todos, deleteTodo, toggledTodo}){
  return(
      <ul className="list">
        {todos.length === 0 && "No Todos"}
        {todos.map((todo) => {
          return (
            <TodoItem 
            {...todo}
            key={todo.id}
            toggledTodo={toggledTodo}
            deleteTodo={deleteTodo}
            />
          );
        })}
      </ul>
    )
}