import { useState, useEffect } from "react";

export default function useTodos() {
  const [todos, setTodos] = useState(() => {
    const saved = localStorage.getItem("todos");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  function addTodo(todo) {
    setTodos(prev => [...prev, todo]);
  }

  function deleteTodo(name) {
    setTodos(prev => prev.filter(todo => todo.name !== name));
  }

  function toggleTodo(name) {
    setTodos(prev =>
      prev.map(todo =>
        todo.name === name ? { ...todo, done: !todo.done } : todo
      )
    );
  }

  function editTodo(oldName, newName) {
    setTodos(prev =>
      prev.map(todo =>
        todo.name === oldName ? { ...todo, name: newName } : todo
      )
    );
  }

  return {
    todos,
    addTodo,
    deleteTodo,
    toggleTodo,
    editTodo
  };
}
