import "./styles.css";
import { useEffect, useState } from "react";
import {NewTodoForm} from "./NewTodoForm"
import { TodoList } from "./TodoList";

export default function App() {
  const [todos, setTodos] = useState(() => {
    const localValue = localStorage.getItem("ITEMS")
    if(localValue == null) return []
    
    return JSON.parse(localValue)
  });

  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(todos))
  }, [todos])

  const addTodo = function(title){
    setTodos((currentTodo) => {
      return [
        ...currentTodo,
        { id: crypto.randomUUID(), title, completed: false },
      ];
    });
  }

  const toggledTodo = function(id, completed) {
    setTodos(currentTodo => {
      return currentTodo.map(todo => {
        if(todo.id === id){
          return {
            ...todo, completed
          }
        }return todo
      })
    })
  }

  const deleteTodo = function(id) {
    setTodos(currentTodo => {
      return currentTodo.filter(todo => todo.id !== id)
    })
  }

  return (
    <>
     <NewTodoForm onSubmit = {addTodo} />
      <h2 className="header"> To do List</h2>
      <TodoList 
      todos = {todos} 
      toggledTodo={toggledTodo}
      deleteTodo={deleteTodo}
      />
    </>
  );
}
