import Empty from "./Empty";
import Form from "./Form";
import List from "./List";
import { useState, useEffect } from "react";

export default function Todo() {
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todos");
    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <div>
      <Form todos={todos} setTodos={setTodos} />
      {todos.length === 0 ? (
        <Empty />
      ) : (
        <List todos={todos} setTodos={setTodos} />
      )}
    </div>
  );
}